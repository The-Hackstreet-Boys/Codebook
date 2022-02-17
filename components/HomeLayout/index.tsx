import { FC } from 'react';

import RightSidebar from '../RightSidebar';
import { Container, Content, ContentContainer } from './styles';

const HomeLayout: FC = ({ children }) => (
  <Container>
    <ContentContainer>
      <Content>{children}</Content>
    </ContentContainer>
    <RightSidebar>Right</RightSidebar>
  </Container>
);

export default HomeLayout;
