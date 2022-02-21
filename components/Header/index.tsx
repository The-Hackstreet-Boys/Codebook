import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineNotifications, MdOutlineSearch } from 'react-icons/md';

import Avatar from '../elements/Avatar';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import { Container, Profile, SearchBar, SearchInput } from './styles';

const Header: FC = () => {
  const { user, logout } = useAuth0();

  const handleLogOut = () => {
    logout({
      returnTo: process.env.NEXT_PUBLIC_AUTH0_LOGOUT_REDIRECT_URI,
    });
  };

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
          <Button size="sm" onClick={handleLogOut}>
            Log Out
          </Button>
        </Profile>
      )}
    </Container>
  );
};

export default Header;
