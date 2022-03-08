import Link from 'next/link';
import { FC } from 'react';

import Avatar from '@/components/elements/Avatar';
import Typography from '@/components/elements/Typography';
import { User } from '@/models/user';

import { Container, NameContainer } from './styles';

interface Props {
  user: User;
}

const Profile: FC<Props> = ({ user }) => (
  <Link href={`/users/${user._id}`}>
    <a>
      <Container>
        {user && <Avatar user={user} showStatus />}
        <NameContainer>
          <Typography variant="h6" isClickable>
            {user.name}
          </Typography>
        </NameContainer>
      </Container>
    </a>
  </Link>
);

export * from './skeleton';
export default Profile;
