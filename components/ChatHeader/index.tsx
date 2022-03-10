import { FC } from 'react';

import SearchDropdown from '../SearchDropdown';
import { Container } from './styles';

const ChatHeader: FC = () => (
  <Container>
    <SearchDropdown variant="chat" />
  </Container>
);

export default ChatHeader;
