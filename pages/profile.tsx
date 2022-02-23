import { FC } from 'react';

import Feed from '../components/Feed';
import Layout from '../components/Layout';
import ProfileLayout from '../components/ProfileLayout';
import Card from '../components/elements/Card';
import Typography from '../components/elements/Typography';
import { useUser } from '@auth0/nextjs-auth0';

const Profile: FC = () => {
  const { user } = useUser();
  return (
    <Layout>
      <ProfileLayout>
        <Card>
          <Typography variant="h4">Recent Posts</Typography>
        </Card>
        {user?.sub && <Feed author={user.sub} />}
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
