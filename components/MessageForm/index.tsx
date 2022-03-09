import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage, MdSend } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import useChat, { NewMessage } from '@/contexts/ChatContext';
import useBoolean from '@/hooks/useBoolean';

import { BottomBar, Button, Input, InputContainer, Send } from './styles';

const MessageForm: FC = () => {
  const [text, setText] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [codeVisibility, toggleCodeVisibility, setCodeVisibility] = useBoolean(false);

  const [inputMessage, setInputMessage] = useState('');

  const { sendMessage } = useChat();

  const handleChangeInputMessage = (e: { target: HTMLInputElement }) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage: NewMessage = { text: inputMessage };

    if (codeVisibility && code.length) {
      newMessage.code = {
        text: code,
        language,
      };
    }

    sendMessage(newMessage);
    setInputMessage('');
  };

  return (
    <BottomBar
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   sendMessage({ text: inputMessage });
      //   setInputMessage('');
      // }}
      onSubmit={handleSubmit}
    >
      {codeVisibility && (
        <CodeBlock language={language} setLanguage={setLanguage} code={code} setCode={setCode} />
      )}

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
      <Button active={codeVisibility} onClick={toggleCodeVisibility}>
        <MdCode />
      </Button>
    </BottomBar>
  );
};

export default MessageForm;
