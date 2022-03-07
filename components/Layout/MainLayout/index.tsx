import { FC } from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import { Container, Content } from './styles';

const MainLayout: FC = ({ children }) => (
  <Container>
    <Header />
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default MainLayout;
