import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineNotifications, MdOutlineSearch } from 'react-icons/md';

import Avatar from '../elements/Avatar';
import Logo from '../elements/Logo';
import { Container, Profile, SearchBar, SearchInput } from './styles';

const Header: FC = () => (
  <Container>
    <Link href="/" passHref>
      <Logo />
    </Link>
    <SearchBar>
      <MdOutlineSearch />
      <SearchInput placeholder="Search for posts, groups or people..." />
    </SearchBar>
    <Profile>
      <MdOutlineNotifications />
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEx5Dx4CgFrxg/profile-displayphoto-shrink_800_800/0/1641469515061?e=1650499200&v=beta&t=T8nY1JYzD2OgB8MJ8K6TXOkZyc0RIh3B8DunQCl8upE" />
      Jack Waterfall
    </Profile>
  </Container>
);

export default Header;
