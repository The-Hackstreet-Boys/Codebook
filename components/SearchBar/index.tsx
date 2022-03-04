import { FC, useRef, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import Card from '../elements/Card';
import { Dropdown, DropdownMenu } from '../elements/Dropdown';
import { SearchContainer, SearchInput } from './styles';

const SearchBar: FC = () => {
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <Dropdown ref={ref} isOpen={isVisible}>
      <Card padding="sm">
        <SearchContainer>
          <MdOutlineSearch />
          <SearchInput placeholder="Search for posts, groups or people..." />
        </SearchContainer>
      </Card>
      <DropdownMenu></DropdownMenu>
    </Dropdown>
  );
};

export default SearchBar;
