import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Feed from '../../components/Feed';
import FeedLayout from '../../components/FeedLayout';
import Layout from '../../components/Layout';

const TagPage: FC = () => {
  const router = useRouter();
  const { tagId } = router.query;

  return (
    <Layout>
      <FeedLayout>
        <Head>
          <title>Tag | Codebook</title>
        </Head>
        <Feed tag={tagId as string} />
      </FeedLayout>
    </Layout>
  );
};

export default withPageAuthRequired(TagPage);
