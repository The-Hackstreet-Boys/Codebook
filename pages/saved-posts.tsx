import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import Feed from '../components/Feed';
import FeedLayout from '../components/layout/FeedLayout';
import MainLayout from '../components/layout/MainLayout';

const IndexPage: FC = () => (
  <MainLayout>
    <FeedLayout>
      <Head>
        <title>Saved Posts | Codebook</title>
      </Head>
      <Feed onlySavedPosts />
    </FeedLayout>
  </MainLayout>
);

export default withPageAuthRequired(IndexPage);
