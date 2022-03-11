import { FC } from 'react';

import ChatHeader from '@/components/ChatHeader';
import ChatSidebar from '@/components/ChatSidebar';

import { Container, Content } from './styles';

interface Props {
  hideChat?: boolean;
}

const ChatLayout: FC<Props> = ({ children, hideChat = false }) => (
  <Container hideChat={hideChat}>
    <ChatHeader />
    <ChatSidebar />
    <Content>{children}</Content>
  </Container>
);

export default ChatLayout;
