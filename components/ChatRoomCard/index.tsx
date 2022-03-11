import Link from 'next/link';
import { FC } from 'react';
import { MdGroups } from 'react-icons/md';

import Avatar from '@/components/elements/Avatar';
import Box, { Flexbox } from '@/components/elements/Box';
import Timestamp from '@/components/elements/Timestamp';
import Typography from '@/components/elements/Typography';
import { ExtendedChatRoom } from '@/models/chatRoom';

import { Container, GroupIconContainer } from './styles';

interface Props {
  chatRoom: ExtendedChatRoom;
}

const ChatRoomCard: FC<Props> = ({ chatRoom }) => (
  <Container>
    <Link href={`/messages/${chatRoom._id}`}>
      <a>
        <Flexbox gap="0.75rem" alignItems="center">
          {chatRoom.type === 'group' ? (
            <GroupIconContainer>
              <MdGroups />
            </GroupIconContainer>
          ) : (
            <Avatar user={chatRoom.otherUser} />
          )}
          <Box flexGrow={1} flexShrink={1}>
            <Typography variant="h6" isClickable>
              {chatRoom.type === 'group'
                ? chatRoom.participants.map((participant) => participant.name).join(', ')
                : chatRoom.otherUser.name}
            </Typography>
            {chatRoom.lastMessage && (
              <Flexbox gap="1rem" justifyContent="space-between" width="100%">
                <Typography isClickable noWrap>
                  {chatRoom.lastMessage.text}
                </Typography>
                <Timestamp date={chatRoom.lastActiveAt} />
              </Flexbox>
            )}
          </Box>
        </Flexbox>
      </a>
    </Link>
  </Container>
);

export default ChatRoomCard;
