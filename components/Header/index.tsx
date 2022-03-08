import Link from 'next/link';
import { FC } from 'react';

import HeaderDropdown from '@/components/HeaderDropdown';
import Profile, { ProfileSkeleton } from '@/components/Profile';
import SearchDropdown from '@/components/SearchDropdown';
import { Flexbox } from '@/components/elements/Box';
import Logo from '@/components/elements/Logo';
import useCurrentUser from '@/hooks/queries/useCurrentUser';

import { Container } from './styles';

const Header: FC = () => {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <Container>
      <Flexbox alignItems="center" justifyContent="space-between" height="100%" padding="0 2rem">
        <Flexbox alignItems="center" gap="1rem">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <SearchDropdown />
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
