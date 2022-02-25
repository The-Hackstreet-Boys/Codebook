import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import Typography from '../elements/Typography';
import { Container, SearchBar, SearchInput } from './styles';

const Header: FC = () => {
  const { user } = useAuth0User();

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
            {user.picture && <Avatar src={user.picture} />}
            <Typography variant="h5">{user.name}</Typography>
            {
              // eslint-disable-next-line
              <a href="/api/auth/logout">
                <Button size="sm">Log Out</Button>
              </a>
            }
          </Flexbox>
        )}
      </Flexbox>
    </Container>
  );
};

export default Header;
