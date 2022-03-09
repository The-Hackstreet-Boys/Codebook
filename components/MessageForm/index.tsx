import React, { FC, useState } from 'react';

import useChat from '@/contexts/ChatContext';

import { BottomBar, Button, Input, InputContainer, Send } from './styles';

const MessageForm: FC = () => {
  const [inputMessage, setInputMessage] = useState('');

  const { groupedMessages, sendMessage } = useChat();

  const handleChangeInputMessage = (e: { target: HTMLInputElement }) => {
    setInputMessage(e.target.value);
  };

  return (
    <>
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

export default MessageForm;
