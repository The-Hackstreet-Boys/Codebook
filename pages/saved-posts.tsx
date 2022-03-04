import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import Feed from '../components/Feed';
import FeedLayout from '../components/FeedLayout';
import Layout from '../components/Layout';

const IndexPage: FC = () => (
  <Layout>
    <FeedLayout>
      <Head>
        <title>Saved Posts | Codebook</title>
      </Head>
      <Feed onlySavedPosts />
    </FeedLayout>
  </Layout>
);

export default withPageAuthRequired(IndexPage);
