import * as React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainAppBar from '../src/components/MainAppBar/MainAppBar';
import LoggedContext from '../src/context/LoggedContext'
import theme from '../src/constants/theme';

const cache = createCache({ key: 'css' });
cache.compat = true;

export default function MyApp(props) {
  const { Component, pageProps } = props;

  let token;
  
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token")
  }

  const [logged, setLogged] = React.useState(token ? true : false)

  const loggedContext = {logged, setLogged}

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
      <LoggedContext.Provider value={loggedContext}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MainAppBar />
        <Component {...pageProps} />
      </LoggedContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};