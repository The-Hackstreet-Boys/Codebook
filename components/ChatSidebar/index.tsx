import { FC } from 'react';

import Profile from '@/components/Profile';
import { Flexbox } from '@/components/elements/Box';
import useChatRooms from '@/hooks/queries/useChatRooms';

import { Container } from './styles';
import SearchDropdown from '../SearchDropdown';

const ChatSidebar: FC = () => {
  const { data: chatRooms } = useChatRooms();

  return (
    <Container>
      <SearchDropdown variant ='chat'/>
      <Flexbox direction="column" padding="1rem" gap="1rem">
        {chatRooms?.map((chatRoom) => {
          switch (chatRoom.type) {
            case 'private':
              return (
                <Profile
                  user={chatRoom.otherUser}
                  href={`/messages/users/${chatRoom.otherUser._id}`}
                />
              );
            default:
              return <></>;
          }
        })}
      </Flexbox>
    </Container>
  );
};

export default ChatSidebar;
