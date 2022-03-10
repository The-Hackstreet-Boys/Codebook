import React, { FC, useEffect, useRef } from 'react';

import CodeBlock from '@/components/CodeBlock';
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
                    {userMessageGroup.messages.map(({ _id, text, code, image }) => (
                      <UserMessageRight key={_id}>
                        {text}
                        {code && <CodeBlock code={code.text} language={code.language} />}
                      </UserMessageRight>
                    ))}
                  </UserMessageContainerRight>
                </UserContainer>
              ) : (
                <UserContainer>
                  <UserImage src={userMessageGroup.user.picture} referrerPolicy="no-referrer" />
                  <UserMessageAndNameContainer>
                    <Typography>{userMessageGroup.user.name}</Typography>
                    <UserMessageContainerLeft>
                      {userMessageGroup.messages.map(({ _id, text, code, image }) => (
                        <UserMessageLeft key={_id}>
                          {text}
                          <>{code && <CodeBlock code={code.text} language={code.language} />}</>
                        </UserMessageLeft>
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
