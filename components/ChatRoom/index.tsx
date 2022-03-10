import Link from 'next/link';
import { FC } from 'react';
import { MdGroups } from 'react-icons/md';

import Box, { Flexbox } from '@/components/elements/Box';
import { ChatRoom, ExtendedChatRoom } from '@/models/chatRoom';

import Avatar from '../elements/Avatar';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import { GroupIconContainer } from './styles';

interface Props {
  chatRoom: ExtendedChatRoom;
}

const ChatRoomCard: FC<Props> = ({ chatRoom }) => (
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
          <Flexbox gap="1rem" justifyContent="space-between" width="100%">
            <Typography isClickable>{chatRoom.lastMessage?.text}</Typography>
            <Timestamp date={chatRoom.lastActiveAt} />
          </Flexbox>
        </Box>
      </Flexbox>
    </a>
  </Link>
);

export default ChatRoomCard;
