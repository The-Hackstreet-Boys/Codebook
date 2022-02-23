import { FC } from 'react';

import HomeSidebar from '../HomeSidebar';
import Flexbox from '../elements/Flexbox';
import { Container, ContentContainer } from './styles';

const HomeLayout: FC = ({ children }) => (
  <Container>
    <ContentContainer>
      <Flexbox
        direction="column"
        gap="1rem"
        margin="0 auto"
        padding="1rem"
        maxWidth="50rem"
      >
        {children}
      </Flexbox>
    </ContentContainer>
    <HomeSidebar />
  </Container>
);

export default HomeLayout;
