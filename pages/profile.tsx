import { FC } from 'react';

import Feed from '../components/Feed';
import Layout from '../components/Layout';
import ProfileLayout from '../components/ProfileLayout';
import Card from '../components/elements/Card';
import Typography from '../components/elements/Typography';

const Profile: FC = () => {
  return (
    <Layout>
      <ProfileLayout>
        <Card>
          <Typography variant="h4">Recent Posts</Typography>
        </Card>
        <Feed />
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
