import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import ProfileLayout from '../../components/ProfileLayout';
import Card from '../../components/elements/Card';
import Typography from '../../components/elements/Typography';
import useUser from '../../hooks/queries/useUser';

const Profile: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: user } = useUser(userId as string);

  if (!user) return <></>;

  return (
    <Layout>
      <Head>
        <title>{user.name} | Codebook</title>
      </Head>
      <ProfileLayout user={user}>
        <Card>
          <Typography variant="h5">Recent Posts</Typography>
        </Card>
        <Feed author={userId as string} />
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
