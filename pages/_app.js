import * as React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

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
        <title>Todoapp</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" 
            type="image/ico" 
            href="../public/todoapp-Copia.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <LoggedContext.Provider value={loggedContext}>
        <CssBaseline />
        <MainAppBar />
        <Container className="main">
          <Component {...pageProps}/>
        </Container>
      </LoggedContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};