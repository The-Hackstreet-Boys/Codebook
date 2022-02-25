import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';

import Feed from '../components/Feed';
import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const IndexPage: FC = () => (
  <Layout>
    <HomeLayout>
      <PostForm />
      <Feed />
    </HomeLayout>
  </Layout>
);

export default withPageAuthRequired(IndexPage);
