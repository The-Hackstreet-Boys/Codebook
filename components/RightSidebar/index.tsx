import { FC, useEffect, useState } from 'react';

import Avatar from '../elements/Avatar';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { Container } from './styles';

const Profile: FC<{ suggested?: boolean }> = ({ suggested = false }) => {
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
    <Flexbox gap="0.75rem" m="1rem 1.5rem">
      {user && <Avatar src={user.photo} />}
      <Flexbox direction="column" justifyContent="center">
        <Typography variant="h6">{user?.name}</Typography>
        {suggested && <Typography>Also enjoys sports</Typography>}
      </Flexbox>
    </Flexbox>
  );
};

const RightSidebar: FC = () => (
  <Container>
    <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
      Suggested contacts
    </Typography>
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} suggested />
      ))}
    <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
      Contacts
    </Typography>
    {Array(10)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} />
      ))}
  </Container>
);

export default RightSidebar;
