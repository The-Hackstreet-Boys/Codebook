import { FC, useEffect, useState } from 'react';

import { User } from '../../models/user';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Typography from '../elements/Typography';

interface Props {
  user: User;
}

const Profile: FC<Props> = ({ user }) => (
  <Flexbox gap="0.75rem" margin="1rem 1.5rem">
    {user && <Avatar src={user.picture} />}
    <Flexbox direction="column" justifyContent="center">
      <Typography variant="h6">{user.name}</Typography>
    </Flexbox>
  </Flexbox>
);

export default Profile;
