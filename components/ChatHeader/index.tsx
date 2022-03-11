import { FC } from 'react';

import CreateGroupDropdown from '../CreateGroupDropdown';
import SearchDropdown from '../SearchDropdown';
import { Container } from './styles';

const ChatHeader: FC = () => (
  <Container>
    <SearchDropdown variant="chat" />
    <CreateGroupDropdown />
  </Container>
);

export default ChatHeader;
