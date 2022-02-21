import { FC } from 'react';
import {
  MdDashboard,
  MdMessage,
  MdPeopleAlt,
  MdSettings,
} from 'react-icons/md';

import NavLink from '../elements/NavLink';
import { Container, NavItem } from './styles';

const Sidebar: FC = () => (
  <Container>
    <NavLink href="/" passHref>
      <NavItem>
        <MdDashboard />
      </NavItem>
    </NavLink>
    <NavLink href="/groups" passHref>
      <NavItem>
        <MdPeopleAlt />
      </NavItem>
    </NavLink>
    <NavLink href="/messages" passHref>
      <NavItem>
        <MdMessage />
      </NavItem>
    </NavLink>
    <NavLink href="/settings" passHref>
      <NavItem>
        <MdSettings />
      </NavItem>
    </NavLink>
  </Container>
);

export default Sidebar;
