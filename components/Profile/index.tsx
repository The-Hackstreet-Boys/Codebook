import Link from 'next/link';
import { FC } from 'react';

import Avatar from '@/components/elements/Avatar';
import Typography from '@/components/elements/Typography';
import { User } from '@/models/user';

import { Flexbox } from '../elements/Box';

interface Props {
  user: User;
  href?: string;
  link?: boolean;
}

const BaseProfile: FC<Props> = ({ user }) => (
  <Flexbox gap="0.75rem" alignItems="center">
    {user && <Avatar user={user} showStatus />}
    <Typography variant="h6" isClickable>
      {user.name}
    </Typography>
  </Flexbox>
);

const Profile: FC<Props> = ({ link = true, href, ...props }) => {
  if (link) {
    return (
      <Link href={href ?? `/users/${props.user._id}`}>
        <a>
          <BaseProfile {...props} />
        </a>
      </Link>
    );
  }

  return <BaseProfile {...props} />;
};

export * from './skeleton';
export default Profile;
