import { useUser } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import { MdMail, MdPersonAddAlt1 } from 'react-icons/md';

import Layout from '../Layout';
import RightSidebar from '../RightSidebar';
import Avatar from '../elements/Avatar';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import {
  Button,
  ButtonContainer,
  Card,
  Container,
  ProfileContent,
  ProfileSideContainer,
} from './styles';

const ProfileLayout: FC = () => {
  const { user } = useUser();

  return (
    <Layout>
      <Flexbox>
        <Container>
          <ProfileSideContainer>
            {user && (
              <Card>
                {user.picture && <Avatar src={user.picture} />}
                <Typography variant="h3">{user.name}</Typography>
                <Typography variant="h6">{user.nickname}</Typography>
                <Typography variant="p">test 1 and 2</Typography>
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
            <Card>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates similique fuga natus autem animi voluptate, officia
              vitae atque repellendus nulla accusamus nihil neque error maxime
              ratione nemo minima, voluptatibus perspiciatis.
            </Card>
            <Card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatem, nihil dolor ex dolore dolores eveniet pariatur aperiam
              cumque, iure ducimus accusamus perferendis sunt ipsam dicta
              distinctio neque illum maxime.
            </Card>
          </ProfileContent>
          <RightSidebar></RightSidebar>
        </Container>
      </Flexbox>
    </Layout>
  );
};

export default ProfileLayout;
