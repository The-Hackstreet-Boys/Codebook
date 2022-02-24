import Link from 'next/link';
import { FC } from 'react';
import { MdChat, MdPersonAddAlt1, MdPersonRemoveAlt1 } from 'react-icons/md';

import useChangeFollowStatus from '../../hooks/mutations/useChangeFollowStatus';
import { ExtendedUser } from '../../hooks/queries/useUser';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Typography from '../elements/Typography';

interface Props {
  user: ExtendedUser;
}

const ProfileCard: FC<Props> = ({ user }) => {
  const { mutate: changeFollowStatus, isLoading } = useChangeFollowStatus(
    user._id,
  );

  const getStatus = () => {
    if (user?.isFollowing && user?.isFollowing) return 'Following eachother';
    if (user?.isFollowing) return 'Following';
    if (user?.isFollowingYou) return 'Following you';
    if (user?.isOpenToCollaborate) return 'Open to collaborate';
    return 'Hello World!';
  };

  return (
    <Card>
      <Flexbox direction="column" alignItems="center" gap="2rem">
        <Flexbox direction="column" alignItems="center" gap="0.25rem">
          {user.picture && <Avatar src={user.picture} size="lg" />}
          <Typography variant="h4" align="center">
            {user.name}
          </Typography>
          <Typography variant="p" align="center">
            {getStatus()}
          </Typography>
        </Flexbox>
        <Flexbox direction="row" gap="0.5rem" width="100%">
          <Link href={`/messages/${user._id}`} passHref>
            <Button color="secondary" isFullWidth>
              <MdChat />
            </Button>
          </Link>
          <Button
            onClick={() => changeFollowStatus(user.isFollowing)}
            color="secondary"
            isFullWidth
            disabled={isLoading}
          >
            {user.isFollowing ? <MdPersonRemoveAlt1 /> : <MdPersonAddAlt1 />}
          </Button>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};

export default ProfileCard;
