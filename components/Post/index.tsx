import { FC, useEffect, useState } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import Avatar from '../elements/Avatar';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import './styles';
import { Button, ButtonContainer, Container, Timestamp } from './styles';

const Post: FC = () => {
  const [user, setUser] = useState<{ name: string; photo: string }>();

  const fetchUser = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const user = data.results[0];
    setUser({
      name: user.name.first + ' ' + user.name.last,
      photo: user.picture.medium,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Card>
      <Container>
        {user && <Avatar src={user.photo} />}
        <div>
          <Flexbox alignItems="center" gap="1rem">
            <Typography variant="h5">{user?.name}</Typography>
            <Timestamp>25m</Timestamp>
          </Flexbox>
          <Typography>
            Aliquam veritatis rem labore dignissimos quae. Aut illo labore
            voluptatem odio asperiores quaerat. Velit accusantium dolore fugit.
            Est tenetur corporis totam optio repudiandae.
          </Typography>
        </div>
      </Container>
      <ButtonContainer>
        <Button>
          <MdFavorite /> 12
        </Button>
        <Button>
          <MdComment /> 5
        </Button>
        <Button>
          <MdBookmarkAdd />
        </Button>
        <Button>
          <MdShare />
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default Post;
