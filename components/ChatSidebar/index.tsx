import { FC } from 'react';

import ChatRoomCard from '@/components/ChatRoom';
import { Flexbox } from '@/components/elements/Box';
import useChatRooms from '@/hooks/queries/useChatRooms';

import { Container } from './styles';

const ChatSidebar: FC = () => {
  const { data: chatRooms } = useChatRooms();

  return (
    <Container>
      <Flexbox direction="column" padding="1rem" gap="1rem">
        {chatRooms?.map((chatRoom) => (
          <ChatRoomCard key={chatRoom._id} chatRoom={chatRoom} />
        ))}
      </Flexbox>
    </Container>
  );
};

export default ChatSidebar;
