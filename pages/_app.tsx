import { UserProvider } from '@auth0/nextjs-auth0';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from '../styles/GlobalStyle';
import { darkTheme } from '../styles/themes';

dayjs.extend(relativeTime);

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <Normalize />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserProvider>
  );
};

export default App;
