import { FC } from 'react';
import {
  MdDashboard,
  MdMessage,
  MdPeopleAlt,
  MdSettings,
} from 'react-icons/md';

import Flexbox from '../elements/Flexbox';
import NavLink from '../elements/NavLink';
import { Container, NavItem } from './styles';

const Sidebar: FC = () => (
  <Container>
    <Flexbox direction="column" justifyContent="center" height="100%">
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
    </Flexbox>
  </Container>
);

export default Sidebar;
