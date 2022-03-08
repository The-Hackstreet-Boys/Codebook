import { FC } from 'react';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

import { Container, Content } from './styles';

const MainLayout: FC = ({ children }) => (
  <Container>
    <Header />
    <Navbar />
    <Content>{children}</Content>
  </Container>
);

export default MainLayout;
