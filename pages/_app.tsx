import { UserProvider } from '@auth0/nextjs-auth0';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Normalize } from 'styled-normalize';

import { ThemeProvider } from '../contexts/ThemeContext';
import GlobalStyle from '../styles/GlobalStyle';

dayjs.extend(relativeTime);

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
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
