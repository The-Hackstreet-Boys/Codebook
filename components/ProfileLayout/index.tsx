import { FC, useRef } from 'react';
import { MdChat, MdPersonAddAlt1 } from 'react-icons/md';

import useChangeFollowStatus from '../../hooks/mutations/useChangeFollowStatus';
import useUser from '../../hooks/queries/useUser';
import HomeSidebar from '../HomeSidebar';
import Avatar from '../elements/Avatar';
import Box, { Flexbox } from '../elements/Box';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import { Container, Content, ContentContainer } from './styles';

interface Props {
  userId: string;
}

const ProfileLayout: FC<Props> = ({ children, userId }) => {
  const { data: user } = useUser(userId);
  const { mutate: changeFollowStatus, isLoading } =
    useChangeFollowStatus(userId);

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Box>
            {user && (
              <Flexbox
                direction="column"
                gap="1rem"
                position="sticky"
                top="1rem"
              >
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
                      {user.isLookingToCollaborate && (
                        <Typography variant="p" align="center">
                          Open to Collaborate
                        </Typography>
                      )}
                      {user.isFollowing && (
                        <Typography variant="p" align="center">
                          Following
                        </Typography>
                      )}
                    </Flexbox>
                    <Flexbox direction="row" gap="0.5rem" width="100%">
                      <Button color="secondary" isFullWidth>
                        <MdChat />
                      </Button>
                      <Button
                        onClick={() => changeFollowStatus(user.isFollowing)}
                        color="secondary"
                        isFullWidth
                        disabled={isLoading}
                      >
                        <MdPersonAddAlt1 />
                      </Button>
                    </Flexbox>
                  </Card>
                )}
                {user.about && (
                  <Card>
                    <Typography variant="h5">About</Typography>
                    <Typography variant="p">{user.about}</Typography>
                  </Card>
                )}
              </Flexbox>
            )}
          </Box>
          <Flexbox direction="column" gap="1rem">
            {children}
          </Flexbox>
        </Content>
      </ContentContainer>
      <HomeSidebar />
    </Container>
  );
};

export default ProfileLayout;
