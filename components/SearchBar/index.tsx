import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import useSearchResults from '../../hooks/queries/useSearch';
import useDebounce from '../../hooks/useDebounce';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Card from '../elements/Card';
import { Dropdown, DropdownItem, DropdownMenu } from '../elements/Dropdown';
import { SearchContainer, SearchInput } from './styles';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const debouncedQuery = useDebounce(query);
  const { data: searchResults } = useSearchResults(debouncedQuery);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

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
          <DropdownItem key={tag._id}>{tag.name}</DropdownItem>
        ))}{' '}
        {searchResults?.users.map((user) => (
          <DropdownItem key={user._id}>{user.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SearchBar;
