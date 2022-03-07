import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import Feed from '../components/Feed';
import FeedLayout from '../components/layout/FeedLayout';
import MainLayout from '../components/layout/MainLayout';
import PostForm from '../components/PostForm';

const IndexPage: FC = () => (
  <MainLayout>
    <FeedLayout>
      <Head>
        <title>Home | Codebook</title>
      </Head>
      <PostForm />
      <Feed />
    </FeedLayout>
  </MainLayout>
);

export default withPageAuthRequired(IndexPage);
