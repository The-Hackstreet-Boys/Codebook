import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import Button from '../components/elements/Button';

import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import PostDisplay from '../components/PostDisplay';
import PostForm from '../components/PostForm';
import usePosts from '../hooks/queries/usePosts';

const IndexPage: FC = () => {
  const { data, fetchNextPage } = usePosts(1);

  return (
    <Layout>
      <HomeLayout>
        <PostForm />
        {data?.pages.map((page) => (
         <>  {page.data.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}</>
        ))}
      <Button onClick={() => fetchNextPage()}>Load more</Button>
      </HomeLayout>
    </Layout>
  );
};

export default withPageAuthRequired(IndexPage);
