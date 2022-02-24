import { FC, useEffect, useState } from 'react';

import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Typography from '../elements/Typography';

interface Props {
  suggested?: boolean;
}

const Profile: FC<Props> = ({ suggested = false }) => {
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
    <Flexbox gap="0.75rem" margin="1rem 1.5rem">
      {user && <Avatar src={user.photo} />}
      <Flexbox direction="column" justifyContent="center">
        <Typography variant="h6">{user?.name}</Typography>
        {suggested && <Typography>Also enjoys sports</Typography>}
      </Flexbox>
    </Flexbox>
  );
};

export default Profile;
