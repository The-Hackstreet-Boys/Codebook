import React, { FC, useEffect, useRef } from 'react';

import MessageForm from '@/components/MessageForm';
import useChat from '@/contexts/ChatContext';
import useCurrentUser from '@/hooks/queries/useCurrentUser';

import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import {
  ChatContainer,
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

  const { groupedMessages, sendMessage } = useChat();

  // Scrolls to the bottom on rerender
  useEffect(() => scrollToBottom());

  // Scrolls to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
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
      <MessageForm />
    </>
  );
};

export default Chat;
