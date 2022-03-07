import { FC } from 'react';

import RightSidebar from '@/components/RightSidebar';
import { Flexbox } from '@/components/elements/Box';

import { Container, ContentContainer } from './styles';

const FeedLayout: FC = ({ children }) => (
  <Container>
    <ContentContainer>
      <Flexbox direction="column" gap="1rem" margin="0 auto" padding="1rem" maxWidth="50rem">
        {children}
      </Flexbox>
    </ContentContainer>
    <RightSidebar />
  </Container>
);

export default FeedLayout;
