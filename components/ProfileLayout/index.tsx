import { useUser } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import { MdMail, MdPersonAddAlt1 } from 'react-icons/md';

import Layout from '../Layout';
import Avatar from '../elements/Avatar';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import {
  Button,
  ButtonContainer,
  Container,
  ProfileContent,
  ProfileSideContainer,
} from './styles';

const ProfileLayout: FC = () => {
  const { user } = useUser();

  return (
    <Layout>
      <Flexbox m="2rem 2.5rem">
        <Container>
          <ProfileSideContainer>
            {user && (
              <Card>
                {user.picture && <Avatar src={user.picture} />}
                <Typography variant="h3">{user.name}</Typography>
              </Card>
            )}
            <ButtonContainer>
              <Button>
                <MdMail />
              </Button>
              <Button>
                <MdPersonAddAlt1 />
              </Button>
            </ButtonContainer>
          </ProfileSideContainer>
          <ProfileContent>
            <Card></Card>
          </ProfileContent>
        </Container>
      </Flexbox>
    </Layout>
  );
};

export default ProfileLayout;
