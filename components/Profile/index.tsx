import Link from 'next/link';
import { FC } from 'react';

import Avatar from '@/components/elements/Avatar';
import Typography from '@/components/elements/Typography';
import { User } from '@/models/user';

import { Flexbox } from '../elements/Box';

interface Props {
  user: User;
  href?: string;
}

const Profile: FC<Props> = ({ user, href }) => (
  <Link href={href ?? `/users/${user._id}`}>
    <a>
      <Flexbox gap="0.75rem" alignItems="center">
        {user && <Avatar user={user} showStatus />}
        <Typography variant="h6" isClickable>
          {user.name}
        </Typography>
      </Flexbox>
    </a>
  </Link>
);

export * from './skeleton';
export default Profile;
