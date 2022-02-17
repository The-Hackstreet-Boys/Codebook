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
        Feed
      </NavItem>
    </NavLink>
    <NavLink href="/groups" passHref>
      <NavItem>
        <MdPeopleAlt />
        Groups
      </NavItem>
    </NavLink>
    <NavLink href="/messages" passHref>
      <NavItem>
        <MdMessage />
        Messages
      </NavItem>
    </NavLink>
    <NavLink href="/settings" passHref>
      <NavItem>
        <MdSettings />
        Settings
      </NavItem>
    </NavLink>
  </Container>
);

export default Sidebar;
