import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineNotifications, MdOutlineSearch } from 'react-icons/md';

import Avatar from '../elements/Avatar';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import { Container, Profile, SearchBar, SearchInput } from './styles';

const Header: FC = () => {
  const { user } = useUser();

  return (
    <Container>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <SearchBar>
        <MdOutlineSearch />
        <SearchInput placeholder="Search for posts, groups or people..." />
      </SearchBar>
      {user && (
        <Profile>
          <MdOutlineNotifications />
          {user.picture && <Avatar src={user.picture} />}
          {user.name}
          <a href="/api/auth/logout">
            <Button size="sm">Log Out</Button>
          </a>
        </Profile>
      )}
    </Container>
  );
};

export default Header;
