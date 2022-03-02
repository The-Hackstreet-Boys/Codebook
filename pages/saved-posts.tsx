import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';

import Feed from '../components/Feed';
import FeedLayout from '../components/FeedLayout';
import Layout from '../components/Layout';

const IndexPage: FC = () => (
  <Layout>
    <FeedLayout>
      <Feed onlySavedPosts />
    </FeedLayout>
  </Layout>
);

export default withPageAuthRequired(IndexPage);
