import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { FC } from 'react';

import Feed from '../components/Feed';
import FeedLayout from '../components/FeedLayout';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const IndexPage: FC = () => (
  <Layout>
    <FeedLayout>
      <Head>
        <title>Home | Codebook</title>
      </Head>
      <PostForm />
      <Feed />
    </FeedLayout>
  </Layout>
);

export default withPageAuthRequired(IndexPage);
