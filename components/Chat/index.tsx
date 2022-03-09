import React, { FC, useEffect, useRef, useState } from 'react';

import useChat from '@/contexts/ChatContext';
import useCurrentUser from '@/hooks/queries/useCurrentUser';

import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import {
  BottomBar,
  Button,
  ChatContainer,
  Input,
  InputContainer,
  Send,
  UserContainer,
  UserImage,
  UserMessageAndNameContainer,
  UserMessageContainerLeft,
  UserMessageContainerRight,
  UserMessageLeft,
  UserMessageRight,
} from './styles';

const Chat: FC = () => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { data: user } = useCurrentUser();

  const [inputMessage, setInputMessage] = useState(''); // Message to be sent

  const { groupedMessages, sendMessage } = useChat();

  // Scrolls to the bottom on rerender
  useEffect(() => scrollToBottom());

  // Scrolls to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  // Changes stored the value of the input message
  const handleChangeInputMessage = (e: { target: HTMLInputElement }) => {
    setInputMessage(e.target.value);
  };

  return (
    <>
      {' '}
      <ChatContainer>
        {groupedMessages.map((dateMessageGroup) => (
          <>
            <Timestamp date={dateMessageGroup.date} />

            {dateMessageGroup.userGroupedMessages.map((userMessageGroup) =>
              user?._id === userMessageGroup.user._id ? (
                <UserContainer>
                  <UserMessageContainerRight>
                    {userMessageGroup.messages.map((message) => (
                      <UserMessageRight key={message._id}>{message.text}</UserMessageRight>
                    ))}
                  </UserMessageContainerRight>
                </UserContainer>
              ) : (
                <UserContainer>
                  <UserImage src={userMessageGroup.user.picture} referrerPolicy="no-referrer" />
                  <UserMessageAndNameContainer>
                    <Typography>{userMessageGroup.user.name}</Typography>
                    <UserMessageContainerLeft>
                      {userMessageGroup.messages.map((message) => (
                        <UserMessageLeft key={message._id}>{message.text}</UserMessageLeft>
                      ))}
                    </UserMessageContainerLeft>
                  </UserMessageAndNameContainer>
                </UserContainer>
              ),
            )}
          </>
        ))}
        <div ref={messagesEndRef} />
      </ChatContainer>
      <BottomBar
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: inputMessage });
          setInputMessage('');
        }}
      >
        <InputContainer>
          <Input
            placeholder="Message"
            type="text"
            onChange={handleChangeInputMessage}
            value={inputMessage}
          />
          <Button disabled={inputMessage.length === 0}>
            <Send />
          </Button>
        </InputContainer>
      </BottomBar>
    </>
  );
};

export default Chat;
