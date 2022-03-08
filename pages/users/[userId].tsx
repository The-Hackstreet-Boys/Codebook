import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Feed from '@/components/Feed';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import MainLayout from '@/components/layout/MainLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import useUser from '@/hooks/queries/useUser';

const Profile: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: user } = useUser(userId as string);

  if (!user) return <></>;

  return (
    <MainLayout>
      <Head>
        <title>{user.name} | Codebook</title>
      </Head>
      <ProfileLayout user={user}>
        <Card>
          <Typography variant="h5">Recent Posts</Typography>
        </Card>
        <Feed author={userId as string} />
      </ProfileLayout>
    </MainLayout>
  );
};

export default Profile;
