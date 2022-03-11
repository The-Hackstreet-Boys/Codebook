import Link from 'next/link';
import { FC } from 'react';
import { MdClose } from 'react-icons/md';

import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import { User } from '@/models/user';

import { RemoveButton } from './styles';

interface Props {
  users: User[];
  onDelete?: (user: User) => void;
}

const UserList: FC<Props> = ({ users, onDelete }) => (
  <Flexbox gap="0.5rem" margin="0.5rem 0" flexWrap="wrap">
    {users.map((user) =>
      onDelete ? (
        <div key={user._id}>
          <Card padding="xs">
            <Flexbox gap="0.5rem" alignItems="center">
              <Typography>{user.name}</Typography>
              <RemoveButton onClick={() => onDelete(user)}>
                <MdClose />
              </RemoveButton>
            </Flexbox>
          </Card>
        </div>
      ) : (
        <div key={user._id}>
          <Link href={`/users/${user._id}`} passHref>
            <Card padding="xs">
              <Typography isClickable>{user.name}</Typography>
            </Card>
          </Link>
        </div>
      ),
    )}
  </Flexbox>
);

export default UserList;
