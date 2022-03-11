import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import { Flexbox } from '@/components/elements/Box';
import Typography from '@/components/elements/Typography';
import ChatLayout from '@/components/layout/ChatLayout';
import MainLayout from '@/components/layout/MainLayout';

const MessagePage: FC = () => (
  <MainLayout>
    <Head>
      <title>Messages | Codebook</title>
    </Head>
    <ChatLayout hideChat>
      <Flexbox direction="column" alignItems="center" justifyContent="center" height="100%">
        <Typography variant="h3">You don’t have a message selected</Typography>
        <Typography>Choose one from your existing messages, or start a new one.</Typography>
      </Flexbox>
    </ChatLayout>
  </MainLayout>
);

export default withPageAuthRequired(MessagePage);
