import { FC } from 'react';

import HomeSidebar from '../HomeSidebar';
import { Container, Content, ContentContainer } from './styles';

const HomeLayout: FC = ({ children }) => (
  <Container>
    <ContentContainer>
      <Content>{children}</Content>
    </ContentContainer>
    <HomeSidebar />
  </Container>
);

export default HomeLayout;
