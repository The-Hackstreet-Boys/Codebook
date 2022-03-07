import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import MainLayout from '@/components/layout/MainLayout';

const MessagePage: FC = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socketInitialiser();
  }, []);

  const socketInitialiser = async () => {
    await fetch('/api/chat-server');
    const socket = io();
    socket.on('connect', () => {
      setConnected(true);
      console.log('Connected');
    });
    console.log(socket);
  };
  return (
    <MainLayout>
      <Head>
        <title>Messages | Codebook</title>
      </Head>
    </MainLayout>
  );
};

export default withPageAuthRequired(MessagePage);
