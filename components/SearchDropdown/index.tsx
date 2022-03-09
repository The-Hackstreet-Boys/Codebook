import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

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
import useSearchResults from '@/hooks/queries/useSearch';
import useDebounce from '@/hooks/useDebounce';

import { SearchInput } from './styles';


interface Props {variant?: 'default'| 'chat'}
const SearchDropdown: FC <Props> = ({variant = 'default'}) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const { data: searchResults } = useSearchResults(debouncedQuery);
  const hasUserResults = !!searchResults?.users.length;
  const hasTagResults = !!searchResults?.tags.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Dropdown>
      <DropdownToggle>
        <DropdownToggleButton>
          <MdOutlineSearch />
        </DropdownToggleButton>
      </DropdownToggle>
      <DropdownMenu>
        <SearchInput
          placeholder={variant === 'default'?"Search for tags or people":"Search for contacts"}
          value={query}
          onChange={handleChange}
        />
        <DropdownDivider />
        {hasTagResults || hasUserResults ? (
          <>
            {hasUserResults && (
              <Box margin="0.5rem 0.75rem">
                <Typography variant="h5">Users</Typography>
              </Box>
            )}
            {searchResults.users.map((user) => (
              <Link passHref href={`/users/${user._id}`} key={user._id}>
                <DropdownItem>
                  {variant === 'default'?<Profile user={user} />:<Profile user={user} href ={`/messages/users/${user._id}`}/>}
                </DropdownItem>
              </Link>
            ))}
            {variant === 'default' && hasTagResults && (
             <> <Box margin="0.5rem 0.75rem">
                <Typography variant="h5">Tags</Typography>
              </Box>{searchResults.tags.map((tag) => (
              <Link passHref href={`/tags/${tag._id}`} key={tag._id}>
                <DropdownItem>{tag.name}</DropdownItem>
              </Link>
            ))}</>
            )}
            
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

export default SearchDropdown;
