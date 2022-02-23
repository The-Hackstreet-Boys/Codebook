import { FC } from 'react';
import { MdChat, MdPersonAddAlt1 } from 'react-icons/md';

import useUser from '../../hooks/queries/useUser';
import HomeSidebar from '../HomeSidebar';
import Avatar from '../elements/Avatar';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { Container, ContentContainer, ProfileContainer } from './styles';

interface Props {
  userId: string;
}

const ProfileLayout: FC<Props> = ({ children, userId }) => {
  const { data: user } = useUser(userId);

  return (
    <Container>
      <ProfileContainer>
        <ContentContainer>
          <Flexbox direction="column" gap="1rem">
            {user && (
              <Card>
                <Flexbox
                  direction="column"
                  alignItems="center"
                  gap="0.25rem"
                  margin="2rem"
                >
                  {user.picture && <Avatar src={user.picture} size="lg" />}
                  <Typography variant="h4" align="center">
                    {user.name}
                  </Typography>
                  <Typography variant="p" align="center">
                    Open to Collaborate
                  </Typography>
                </Flexbox>
                <Flexbox direction="row" gap="0.5rem" width="100%">
                  <Button color="secondary" isFullWidth>
                    <MdChat />
                  </Button>
                  <Button color="secondary" isFullWidth>
                    <MdPersonAddAlt1 />
                  </Button>
                </Flexbox>
              </Card>
            )}
            <Flexbox direction="column" width="100%">
              <Card>
                <Typography variant="h4">About</Typography>
                <Typography variant="p">{user?.about}</Typography>
              </Card>
            </Flexbox>
          </Flexbox>
        </ContentContainer>
        <ContentContainer>
          <Flexbox direction="column" gap="1rem">
            {children}
          </Flexbox>
        </ContentContainer>
      </ProfileContainer>
      <HomeSidebar />
    </Container>
  );
};

export default ProfileLayout;
