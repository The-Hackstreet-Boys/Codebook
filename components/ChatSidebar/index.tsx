import Link from 'next/link';
import { FC } from 'react';
import { MdGroups } from 'react-icons/md';

import Profile from '@/components/Profile';
import { Flexbox } from '@/components/elements/Box';
import useChatRooms from '@/hooks/queries/useChatRooms';

import Typography from '../elements/Typography';
import { Container, GroupIconContainer } from './styles';

const ChatSidebar: FC = () => {
  const { data: chatRooms } = useChatRooms();

  return (
    <Container>
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
            case 'group':
              return (
                <Link href={`/messages/${chatRoom._id}`}>
                  <a>
                    <Flexbox gap="0.75rem" alignItems="center">
                      <GroupIconContainer>
                        <MdGroups />
                      </GroupIconContainer>
                      <Typography variant="h6" isClickable>
                        {chatRoom.participants.map((participant) => participant.name).join(', ')}
                      </Typography>
                    </Flexbox>
                  </a>
                </Link>
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
