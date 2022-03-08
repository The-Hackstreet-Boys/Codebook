import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import MessageForm from '@/components/MessageForm';
import MainLayout from '@/components/layout/MainLayout';
import { SocketProvider } from '@/contexts/ChatContext';

const MessagePage: FC = () => {
  return (
    <SocketProvider>
      <MainLayout>
        <Head>
          <title>Messages | Codebook</title>
        </Head>
        <MessageForm />
      </MainLayout>
    </SocketProvider>
  );
};

export default withPageAuthRequired(MessagePage);
