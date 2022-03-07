import Link from 'next/link';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import Profile from '@/components/Profile';
import Box from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import { Dropdown, DropdownItem, DropdownMenu } from '@/components/elements/Dropdown';
import Typography from '@/components/elements/Typography';
import useSearchResults from '@/hooks/queries/useSearch';
import useDebounce from '@/hooks/useDebounce';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { SearchContainer, SearchInput } from './styles';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const debouncedQuery = useDebounce(query);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsVisible(false));
  const { data: searchResults, isLoading } = useSearchResults(debouncedQuery);
  const hasUserResults = !!searchResults?.users.length;
  const hasTagResults = !!searchResults?.tags.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => setIsVisible(!!query.length), [query]);

  return (
    <Dropdown ref={ref} isOpen={isVisible && !isLoading} position="right">
      <Card padding="sm">
        <SearchContainer>
          <MdOutlineSearch />
          <SearchInput
            placeholder="Search for tags or people"
            value={query}
            onChange={handleChange}
          />
        </SearchContainer>
      </Card>
      <DropdownMenu>
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
