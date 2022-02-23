import { FC } from 'react';

import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import ProfileLayout from '../../components/ProfileLayout';
import Card from '../../components/elements/Card';
import Typography from '../../components/elements/Typography';
import { useRouter } from 'next/router';

const Profile: FC = () => {
  const router = useRouter()
  const {userId} = router.query

  return (
    <Layout>
      <ProfileLayout>
        <Card>
          <Typography variant="h4">Recent Posts</Typography>
        </Card>
        {userId && <Feed author={userId as string} />}
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
