import Link from 'next/link';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import Card from '@/components/elements/Card';
import { Dropdown, DropdownItem, DropdownMenu } from '@/components/elements/Dropdown';
import useSearchResults from '@/hooks/queries/useSearch';
import useDebounce from '@/hooks/useDebounce';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { SearchContainer, SearchInput } from './styles';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const debouncedQuery = useDebounce(query);
  const { data: searchResults } = useSearchResults(debouncedQuery);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsVisible(false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => setIsVisible(!!query.length), [query]);

  return (
    <Dropdown ref={ref} isOpen={isVisible} position="right">
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
        {searchResults?.tags.map((tag) => (
          <Link passHref href={`/tags/${tag._id}`} key={tag._id}>
            <DropdownItem>{tag.name}</DropdownItem>
          </Link>
        ))}
        {searchResults?.users.map((user) => (
          <Link passHref href={`/users/${user._id}`} key={user._id}>
            <DropdownItem>{user.name}</DropdownItem>
          </Link>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SearchBar;
