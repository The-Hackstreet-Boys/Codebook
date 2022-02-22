import { useUser } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import { MdMail, MdPersonAddAlt1 } from 'react-icons/md';

import Layout from '../Layout';
import RightSidebar from '../RightSidebar';
import Avatar from '../elements/Avatar';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { ProfileContainer, ProfileSideContainer } from './styles';

const ProfileLayout: FC = () => {
  const { user } = useUser();

  return (
    <Layout>
      <ProfileContainer>
        <ProfileSideContainer>
          {user && (
            <Card>
              <Flexbox direction="column" alignItems="center" gap="0.25rem">
                {user.picture && <Avatar src={user.picture} />}
                <Typography variant="h4" align="center">
                  {user.name}
                </Typography>
                <Typography variant="p" align="center">
                  Open to Collaborate
                </Typography>
              </Flexbox>
            </Card>
          )}
          <Flexbox direction="row" gap="0.5rem" m="0.5rem" isFullWidth>
            <Button color="secondary" isFullWidth>
              <MdMail />
            </Button>
            <Button color="secondary" isFullWidth>
              <MdPersonAddAlt1 />
            </Button>
          </Flexbox>
          <Flexbox direction="column" m="1.5rem" isFullWidth>
            <Card>
              <Typography variant="h5" align="center">
                Something?
              </Typography>
            </Card>
          </Flexbox>
        </ProfileSideContainer>
        <Flexbox direction="column" gap="1rem" m="2rem">
          <Card>
            <Typography variant="h4">About</Typography>
            <Typography variant="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates similique fuga natus autem animi voluptate, officia
              vitae atque repellendus nulla accusamus nihil neque error maxime
              ratione nemo minima, voluptatibus perspiciatis.
            </Typography>
          </Card>
          <Card>
            <Typography variant="h4">Recent Activity</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatem, nihil dolor ex dolore dolores eveniet pariatur aperiam
              cumque, iure ducimus accusamus perferendis sunt ipsam dicta
              distinctio neque illum maxime.
            </Typography>
          </Card>
        </Flexbox>
        <RightSidebar></RightSidebar>
      </ProfileContainer>
    </Layout>
  );
};

export default ProfileLayout;
