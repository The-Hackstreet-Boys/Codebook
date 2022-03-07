import { FC } from 'react';

import ProfileCard from '@/components/ProfileCard';
import RightSidebar from '@/components/RightSidebar';
import Box, { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import { ExtendedUser } from '@/models/user';

import { Container, Content, ContentContainer } from './styles';

interface Props {
  user: ExtendedUser;
}

const ProfileLayout: FC<Props> = ({ children, user }) => (
  <Container>
    <ContentContainer>
      <Content>
        <Box>
          {user && (
            <Flexbox direction="column" gap="1rem" position="sticky" top="1rem">
              <ProfileCard user={user} />
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
    <RightSidebar />
  </Container>
);

export default ProfileLayout;
