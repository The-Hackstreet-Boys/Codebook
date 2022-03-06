import dayjs from 'dayjs';
import { FC } from 'react';

import { ExtendedUser, User } from '@/models/user';

import { Container, Image } from './styles';

export type AvatarSize = 'sm' | 'md' | 'lg';

interface Props {
  size?: AvatarSize;
  user: User | ExtendedUser;
  showStatus?: boolean;
}

const Avatar: FC<Props> = ({ user, size = 'sm', showStatus = false }) => {
  const isActive = dayjs().diff(dayjs(user.lastActiveAt), 'minutes') < 5;

  return (
    <Container size={size} showActiveStatus={showStatus && isActive}>
      <Image src={user.picture} alt="avatar" referrerPolicy="no-referrer" />
    </Container>
  );
};

export default Avatar;
