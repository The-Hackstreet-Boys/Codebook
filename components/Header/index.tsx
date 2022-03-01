import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import useCurrentUser from '../../hooks/queries/useCurrentUser';
import HeaderDropdown from '../HeaderDropdown';
import Profile from '../Profile';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
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
          <Card padding="sm">
            <SearchBar>
              <MdOutlineSearch />
              <SearchInput placeholder="Search for posts, groups or people..." />
            </SearchBar>
          </Card>
        </Flexbox>
        {user && (
          <Flexbox alignItems="center" gap="0.5rem">
            <Profile user={user} />
            <HeaderDropdown />
          </Flexbox>
        )}
      </Flexbox>
    </Container>
  );
};

export default Header;
