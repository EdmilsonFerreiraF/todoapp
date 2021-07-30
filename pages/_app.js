import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import LoggedContext from '../src/context/LoggedContext'
import theme from '../src/constants/theme';
import MainAppBar from '../src/components/MainAppBar/MainAppBar';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    textAlign: 'center',
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const classes = useStyles();
  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token")
  }

  const [logged, setLogged] = useState(token ? true : false)
  const loggedContext = { logged, setLogged }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
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
          <Container className={classes.main}>
            <Component {...pageProps} />
          </Container>
        </LoggedContext.Provider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
