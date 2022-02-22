import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import PostDisplay from '../components/PostDisplay';
import PostForm from '../components/PostForm';
import Button from '../components/elements/Button';
import usePosts from '../hooks/queries/usePosts';

const IndexPage: FC = () => {
  const { data, fetchNextPage } = usePosts(10);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <Layout>
      <HomeLayout>
        <PostForm />
        {data?.pages.map((page) => (
          <>
            {page.data.map((post) => (
              <PostDisplay post={post} key={post._id} />
            ))}
          </>
        ))}
        <div ref={ref}></div>
      </HomeLayout>
    </Layout>
  );
};

export default withPageAuthRequired(IndexPage);
