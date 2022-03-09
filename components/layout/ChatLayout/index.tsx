import { FC } from 'react';

import ChatSidebar from '@/components/ChatSidebar';
import { Flexbox } from '@/components/elements/Box';

import { Container, ContentContainer } from './styles';

const ChatLayout: FC = ({ children }) => (
  <Container>
    <ChatSidebar />
    <ContentContainer>
      <Flexbox direction="column" gap="1rem" margin="0 auto" padding="1rem" maxWidth="50rem">
        {children}
      </Flexbox>
    </ContentContainer>
  </Container>
);

export default ChatLayout;
