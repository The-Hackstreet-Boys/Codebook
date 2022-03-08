import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Feed from '@/components/Feed';
import FeedLayout from '@/components/layout/FeedLayout';
import MainLayout from '@/components/layout/MainLayout';

const TagPage: FC = () => {
  const router = useRouter();
  const { tagId } = router.query;

  return (
    <MainLayout>
      <FeedLayout>
        <Head>
          <title>Tag | Codebook</title>
        </Head>
        <Feed tag={tagId as string} />
      </FeedLayout>
    </MainLayout>
  );
};

export default withPageAuthRequired(TagPage);
