import { FC } from 'react';

import useUser from '../../hooks/queries/useUser';
import HomeSidebar from '../HomeSidebar';
import ProfileCard from '../ProfileCard';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import { Container, Content, ContentContainer } from './styles';

interface Props {
  userId: string;
}

const ProfileLayout: FC<Props> = ({ children, userId }) => {
  const { data: user } = useUser(userId);

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
                {<ProfileCard user={user} />}
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
