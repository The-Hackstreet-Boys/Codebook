import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import FeedLayout from '../../components/FeedLayout';
import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import PostCardSkeleton from '../../components/PostCard/skeleton';
import usePost from '../../hooks/queries/usePost';

const PostScreen: FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = usePost(postId as string);

  if (!post) return <></>;

  return (
    <Layout>
      <FeedLayout>
        <Head>
          <title>Home | Codebook</title>
        </Head>
        {post ? <PostCard post={post} /> : <PostCardSkeleton />}
      </FeedLayout>
    </Layout>
  );
};

export default PostScreen;
