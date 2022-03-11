import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';
import { MdGroupAdd } from 'react-icons/md';

import Profile from '@/components/Profile';
import Box from '@/components/elements/Box';
import Dropdown, {
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownToggleButton,
} from '@/components/elements/Dropdown';
import Typography from '@/components/elements/Typography';
import useCreateChatRoom from '@/hooks/mutations/useCreateChatRoom';
import useSearchResults from '@/hooks/queries/useSearch';
import useDebounce from '@/hooks/useDebounce';
import { ChatRoom } from '@/models/chatRoom';
import { User } from '@/models/user';

import UserList from '../List/user';
import Button from '../elements/Button';
import { SearchInput } from './styles';

const CreateGroupDropdown: FC = () => {
  const router = useRouter();
  const { push } = router;
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const debouncedQuery = useDebounce(query);
  const { data: searchResults } = useSearchResults(debouncedQuery);
  const hasUserResults = !!searchResults?.users.length;

  const onSuccess = (createdChatRoom: ChatRoom) => {
    setUsers([]);
    push(`/messages/${createdChatRoom._id}`);
  };

  const { mutate: createChatRoom } = useCreateChatRoom(onSuccess);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const addUser = (user: User) => {
    const alreadyExists = users.some((t) => t._id === user._id);
    if (!alreadyExists) setUsers((oldValue) => [...oldValue, user]);
  };

  const removeUser = (userToDelete: User) => {
    setUsers((oldValue) => oldValue.filter((user) => user._id !== userToDelete._id));
  };

  const handleSubmit = () => {
    if (users.length < 2) {
      push(`/messages/users/${users[0]._id}`);
    } else {
      createChatRoom(users);
    }
  };

  return (
    <Dropdown>
      <DropdownToggle>
        <DropdownToggleButton>
          <MdGroupAdd />
        </DropdownToggleButton>
      </DropdownToggle>
      <DropdownMenu>
        {!!users?.length && (
          <>
            <UserList users={users} onDelete={removeUser} />
            <Button isFullWidth onClick={handleSubmit}>
              Create group
            </Button>
            <DropdownDivider />
          </>
        )}
        <SearchInput placeholder={'Search for contacts'} value={query} onChange={handleChange} />
        <DropdownDivider />
        {hasUserResults ? (
          <>
            {hasUserResults && (
              <Box margin="0.5rem 0.75rem">
                <Typography variant="h5">Users</Typography>
              </Box>
            )}
            {searchResults.users.map((user) => (
              <DropdownItem key={user._id} onClick={() => addUser(user)}>
                <Profile user={user} link={false} />
              </DropdownItem>
            ))}
          </>
        ) : (
          <Box margin="0.75rem">
            <Typography>No results</Typography>
          </Box>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CreateGroupDropdown;
