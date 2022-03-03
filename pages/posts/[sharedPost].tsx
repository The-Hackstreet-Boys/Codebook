import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import FeedLayout from '../../components/FeedLayout';
import useUser from '../../hooks/queries/useUser';
import useSharedPost from '../../hooks/queries/useSharedPost';


const SharedPost: FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post} = useSharedPost(postId as string);

  if (!post) return <></>;

  return (
    <Layout>
       <FeedLayout>  
      <Head>
        <title>Home | Codebook</title>
      </Head>
      <Feed post={postId as string} />
      </FeedLayout>
    </Layout>
  );
};

export default SharedPost;
