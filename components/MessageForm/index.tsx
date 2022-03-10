import React, { FC, FormEvent, useState } from 'react';
import { MdCode } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import useChat, { NewMessage } from '@/contexts/ChatContext';
import useBoolean from '@/hooks/useBoolean';

import { BottomBar, Button, IconContainer, Input, InputContainer, Send } from './styles';

const MessageForm: FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [codeVisibility, toggleCodeVisibility, setCodeVisibility] = useBoolean(false);

  const [text, setText] = useState('');

  const { sendMessage } = useChat();

  const handleChangeInputMessage = (e: { target: HTMLInputElement }) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage: NewMessage = { text: text };

    if (codeVisibility && code.length) {
      newMessage.code = {
        text: code,
        language,
      };
    }

    sendMessage(newMessage);
    onSuccess();
  };

  const onSuccess = () => {
    setText('');
    setCode('');
    setLanguage('typescript');
    setCodeVisibility(false);
  };

  return (
    <BottomBar onSubmit={handleSubmit}>
      <InputContainer>
        <Input placeholder="Message" type="text" onChange={handleChangeInputMessage} value={text} />
        <Button disabled={text.length === 0}>
          <Send />
        </Button>
      </InputContainer>
      {codeVisibility && (
        <CodeBlock language={language} setLanguage={setLanguage} code={code} setCode={setCode} />
      )}

      <IconContainer>
        <Button active={codeVisibility} onClick={toggleCodeVisibility}>
          <MdCode />
        </Button>
      </IconContainer>
    </BottomBar>
  );
};

export default MessageForm;
