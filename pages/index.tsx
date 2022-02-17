import { FC } from 'react';

import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

const IndexPage: FC = () => {
  return (
    <Layout>
      <HomeLayout>
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </HomeLayout>
    </Layout>
  );
};

export default IndexPage;
