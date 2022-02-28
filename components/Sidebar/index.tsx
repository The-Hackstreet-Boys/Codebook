import { FC } from 'react';
import {
  MdBookmark,
  MdDashboard,
  MdMessage,
  MdPeopleAlt,
} from 'react-icons/md';

import { Flexbox } from '../elements/Box';
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
      <NavLink href="/saved-posts" passHref>
        <NavItem>
          <MdBookmark />
        </NavItem>
      </NavLink>
    </Flexbox>
  </Container>
);

export default Sidebar;
