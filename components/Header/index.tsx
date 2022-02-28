import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import useCurrentUser from '../../hooks/queries/useCurrentUser';
import Profile from '../Profile';
import { Flexbox } from '../elements/Box';
import HeaderDropdown from '../elements/HeaderDropdown';
import Logo from '../elements/Logo';
import { Container, SearchBar, SearchInput } from './styles';

const Header: FC = () => {
  const { data: user } = useCurrentUser();

  return (
    <Container>
      <Flexbox
        alignItems="center"
        gap="1rem"
        justifyContent="space-between"
        height="100%"
        padding="0 2rem"
      >
        <Flexbox alignItems="center" gap="2rem">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <SearchBar>
            <MdOutlineSearch />
            <SearchInput placeholder="Search for posts, groups or people..." />
          </SearchBar>
        </Flexbox>
        {user && (
          <Flexbox alignItems="center" gap="1rem">
            <Profile user={user} />
            <HeaderDropdown />
          </Flexbox>
        )}
      </Flexbox>
    </Container>
  );
};

export default Header;
