import { FC } from 'react';

import ChatRoomCard from '@/components/ChatRoomCard';
import useChatRooms from '@/hooks/queries/useChatRooms';

import { Container } from './styles';

const ChatSidebar: FC = () => {
  const { data: chatRooms } = useChatRooms();

  return (
    <Container>
      {chatRooms?.map((chatRoom) => (
        <ChatRoomCard key={chatRoom._id} chatRoom={chatRoom} />
      ))}
    </Container>
  );
};

export default ChatSidebar;
