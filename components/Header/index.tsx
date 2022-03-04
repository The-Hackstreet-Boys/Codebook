import Link from 'next/link';
import { FC } from 'react';

import useCurrentUser from '../../hooks/queries/useCurrentUser';
import HeaderDropdown from '../HeaderDropdown';
import Profile, { ProfileSkeleton } from '../Profile';
import SearchBar from '../SearchBar';
import { Flexbox } from '../elements/Box';
import Logo from '../elements/Logo';
import { Container } from './styles';

const Header: FC = () => {
  const { data: user, isLoading } = useCurrentUser();

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
          <SearchBar />
        </Flexbox>
        <Flexbox alignItems="center" gap="1rem">
          {isLoading || !user ? <ProfileSkeleton /> : <Profile user={user} />}
          <HeaderDropdown />
        </Flexbox>
      </Flexbox>
    </Container>
  );
};

export default Header;
