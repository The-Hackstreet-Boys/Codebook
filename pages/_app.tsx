import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from '../styles/GlobalStyle';
import { darkTheme } from '../styles/themes';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Normalize />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
