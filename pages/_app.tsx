import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from '../styles/GlobalStyle';
import { darkTheme } from '../styles/themes';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
