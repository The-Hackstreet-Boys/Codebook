import { FC } from 'react';

import ContactSidebar from '@/components/ContactSidebar';
import { Flexbox } from '@/components/elements/Box';

import { Container, ContentContainer } from './styles';

const FeedLayout: FC = ({ children }) => (
  <Container>
    <ContentContainer>
      <Flexbox direction="column" gap="1rem" margin="0 auto" padding="1rem" maxWidth="50rem">
        {children}
      </Flexbox>
    </ContentContainer>
    <ContactSidebar />
  </Container>
);

export default FeedLayout;
