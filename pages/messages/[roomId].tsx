import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Chat from '@/components/Chat';
import ChatLayout from '@/components/layout/ChatLayout';
import MainLayout from '@/components/layout/MainLayout';
import { ChatProvider } from '@/contexts/ChatContext';

const MessagePage: FC = () => {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <ChatProvider roomId={roomId as string}>
      <MainLayout>
        <Head>
          <title>Messages | Codebook</title>
        </Head>
        <ChatLayout>
          <Chat />
        </ChatLayout>
      </MainLayout>
    </ChatProvider>
  );
};

export default withPageAuthRequired(MessagePage);
