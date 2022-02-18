import { FC } from 'react';

import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import PostDisplay from '../components/PostDisplay';
import PostForm from '../components/PostForm';
import usePosts from '../hooks/queries/usePosts';

const IndexPage: FC = () => {
  const { data: posts } = usePosts();

  return (
    <Layout>
      <HomeLayout>
        <PostForm />
        {posts?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </HomeLayout>
    </Layout>
  );
};

export default IndexPage;
