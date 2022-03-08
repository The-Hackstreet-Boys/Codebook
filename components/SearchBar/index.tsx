import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import Profile from '@/components/Profile';
import Box from '@/components/elements/Box';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';
import Typography from '@/components/elements/Typography';
import useSearchResults from '@/hooks/queries/useSearch';
import useBoolean from '@/hooks/useBoolean';
import useDebounce from '@/hooks/useDebounce';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { SearchInput } from './styles';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const [isVisible, toggleIsVisible, setIsVisible] = useBoolean(false);
  const debouncedQuery = useDebounce(query);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsVisible(false));
  const { data: searchResults } = useSearchResults(debouncedQuery);
  const hasUserResults = !!searchResults?.users.length;
  const hasTagResults = !!searchResults?.tags.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Dropdown ref={ref} isOpen={isVisible} position="right">
      <DropdownToggle onClick={toggleIsVisible}>
        <MdOutlineSearch />
      </DropdownToggle>
      <DropdownMenu>
        <SearchInput
          placeholder="Search for tags or people"
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
                  <Profile user={user} />
                </DropdownItem>
              </Link>
            ))}
            {hasTagResults && (
              <Box margin="0.5rem 0.75rem">
                <Typography variant="h5">Tags</Typography>
              </Box>
            )}
            {searchResults.tags.map((tag) => (
              <Link passHref href={`/tags/${tag._id}`} key={tag._id}>
                <DropdownItem>{tag.name}</DropdownItem>
              </Link>
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

export default SearchBar;
