import { FC } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { Container, Content } from './styles';

const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
