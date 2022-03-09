import Link from 'next/link';
import { FC } from 'react';

import HeaderDropdown from '@/components/HeaderDropdown';
import Profile, { ProfileSkeleton } from '@/components/Profile';
import SearchDropdown from '@/components/SearchDropdown';
import { Flexbox } from '@/components/elements/Box';
import Logo from '@/components/elements/Logo';
import useCurrentUser from '@/hooks/queries/useCurrentUser';

import { Container, ProfileContainer } from './styles';

const Header: FC = () => {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <Container>
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        padding="0 2rem"
        gap="1rem"
      >
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <Flexbox alignItems="center" gap="1rem">
          <ProfileContainer>
            {isLoading || !user ? <ProfileSkeleton /> : <Profile user={user} />}
          </ProfileContainer>
          <SearchDropdown />
          <HeaderDropdown />
        </Flexbox>
      </Flexbox>
    </Container>
  );
};

export default Header;
