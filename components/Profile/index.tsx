import Link from 'next/link';
import { FC } from 'react';

import { User } from '../../models/user';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Skeleton from '../elements/Skeleton';
import Typography from '../elements/Typography';

interface DefaultProps {
  variant: 'default';
  user: User;
}

interface SkeleonProps {
  variant: 'skeleton';
}

type Props = DefaultProps | SkeleonProps;

const Profile: FC<Props> = (props) => {
  switch (props.variant) {
    case 'skeleton':
      return (
        <Flexbox gap="0.75rem">
          <Skeleton variant="circle" width="2.5rem" />
          <Flexbox direction="column" justifyContent="center">
            <Skeleton variant="title" width="10rem" />
          </Flexbox>
        </Flexbox>
      );
    case 'default':
      return (
        <Link href={`/users/${props.user._id}`}>
          <a>
            <Flexbox gap="0.75rem">
              {props.user && <Avatar user={props.user} showStatus />}
              <Flexbox direction="column" justifyContent="center">
                <Typography variant="h6" isClickable>
                  {props.user.name}
                </Typography>
              </Flexbox>
            </Flexbox>
          </a>
        </Link>
      );
  }
};

export default Profile;
