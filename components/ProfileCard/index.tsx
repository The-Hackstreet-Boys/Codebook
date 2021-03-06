import Link from 'next/link';
import { FC } from 'react';
import { MdChat, MdPersonAddAlt1, MdPersonRemoveAlt1 } from 'react-icons/md';

import Avatar from '@/components/elements/Avatar';
import { Flexbox } from '@/components/elements/Box';
import Button from '@/components/elements/Button';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import useFollowUser from '@/hooks/mutations/useFollowUser';
import { ExtendedUser } from '@/models/user';

interface Props {
  user: ExtendedUser;
}

const ProfileCard: FC<Props> = ({ user }) => {
  const { mutate: followUser, isLoading } = useFollowUser(user._id);

  const getStatus = () => {
    if (user?.isFollowing && user?.isFollowingYou) return 'Following eachother';
    if (user?.isFollowing) return 'Following';
    if (user?.isFollowingYou) return 'Following you';
    if (user?.isOpenToCollaborate) return 'Open to collaborate';
    return 'Hello World!';
  };

  return (
    <Card>
      <Flexbox direction="column" alignItems="center" gap="2rem">
        <Flexbox direction="column" alignItems="center" gap="0.25rem">
          {user.picture && <Avatar user={user} size="lg" showStatus />}
          <Typography variant="h4" align="center">
            {user.name}
          </Typography>
          <Typography variant="p" align="center">
            {getStatus()}
          </Typography>
        </Flexbox>
        <Flexbox direction="row" gap="0.5rem" width="100%">
          <Link href={`/messages/users/${user._id}`} passHref>
            <Button color="secondary" isFullWidth>
              <MdChat />
            </Button>
          </Link>
          <Button onClick={() => followUser()} color="secondary" isFullWidth disabled={isLoading}>
            {user.isFollowing ? <MdPersonRemoveAlt1 /> : <MdPersonAddAlt1 />}
          </Button>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};

export default ProfileCard;
