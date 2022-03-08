import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import usePost from '@/hooks/queries/usePost';

import PostCard from '@/components/PostCard';
import PostCardSkeleton from '@/components/PostCard/skeleton';
import FeedLayout from '@/components/layout/FeedLayout';
import MainLayout from '@/components/layout/MainLayout';

const PostScreen: FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = usePost(postId as string);

  if (!post) return <></>;

  return (
    <MainLayout>
      <FeedLayout>
        <Head>
          <title>Home | Codebook</title>
        </Head>
        {post ? <PostCard post={post} /> : <PostCardSkeleton />}
      </FeedLayout>
    </MainLayout>
  );
};

export default PostScreen;
