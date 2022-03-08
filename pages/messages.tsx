import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC, useState } from 'react';

import MessageForm from '@/components/MessageForm';
import MainLayout from '@/components/layout/MainLayout';
import { SocketProvider } from '@/contexts/SocketContext';

const MessagePage: FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <SocketProvider setMessages={setMessages}>
      <MainLayout>
        <Head>
          <title>Messages | Codebook</title>
        </Head>
        <MessageForm />
        {messages.map((m, index) => (
          <p key={index}>{m}</p>
        ))}
      </MainLayout>
    </SocketProvider>
  );
};

export default withPageAuthRequired(MessagePage);
