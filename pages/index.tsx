import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';

import CommentForm from '../components/CommentForm';
import Feed from '../components/Feed';
import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const IndexPage: FC = () => (
  <Layout>
    <HomeLayout>
      <PostForm />
      <CommentForm postId="621760b24b490853ffae7b65" />
      <Feed />
    </HomeLayout>
  </Layout>
);

export default withPageAuthRequired(IndexPage);
