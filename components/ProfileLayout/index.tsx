import { useUser } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import { MdChat, MdPersonAddAlt1 } from 'react-icons/md';

import HomeSidebar from '../HomeSidebar';
import Avatar from '../elements/Avatar';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { Container, ContentContainer, ProfileContainer } from './styles';

const ProfileLayout: FC = () => {
  const { user } = useUser();

  return (
    <Container>
      <ProfileContainer>
        <Flexbox direction="column" gap="1rem">
          {user && (
            <Card>
              <Flexbox
                direction="column"
                alignItems="center"
                gap="0.25rem"
                margin="2rem"
              >
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
          <Flexbox direction="row" gap="0.5rem" width="100%">
            <Button color="secondary" isFullWidth>
              <MdChat />
            </Button>
            <Button color="secondary" isFullWidth>
              <MdPersonAddAlt1 />
            </Button>
          </Flexbox>
          <Flexbox direction="column" width="100%">
            <Card>
              <Typography variant="h5" align="center">
                Something?
              </Typography>
            </Card>
          </Flexbox>
        </Flexbox>
        <ContentContainer>
          <Flexbox direction="column" gap="1rem">
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
              <Typography variant="p">Likes, Comments, Posts...?</Typography>
            </Card>
          </Flexbox>
        </ContentContainer>
      </ProfileContainer>
      <HomeSidebar />
    </Container>
  );
};

export default ProfileLayout;
