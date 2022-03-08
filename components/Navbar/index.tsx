import { FC } from 'react';
import { MdBookmark, MdDashboard, MdMessage, MdPeopleAlt } from 'react-icons/md';

import NavLink from '@/components/elements/NavLink';

import { Container, NavItem } from './styles';

const Navbar: FC = () => (
  <Container>
    <NavLink href="/" passHref>
      <NavItem>
        <MdDashboard />
      </NavItem>
    </NavLink>
    {/* <NavLink href="/groups" passHref>
        <NavItem>
          <MdPeopleAlt />
        </NavItem>
      </NavLink> */}
    <NavLink href="/messages" passHref>
      <NavItem>
        <MdMessage />
      </NavItem>
    </NavLink>
    <NavLink href="/saved-posts" passHref>
      <NavItem>
        <MdBookmark />
      </NavItem>
    </NavLink>
  </Container>
);

export default Navbar;
