import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage, MdSend } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import useChat, { NewMessage } from '@/contexts/ChatContext';
import useBoolean from '@/hooks/useBoolean';

import { BottomBar, Button, Input, InputContainer, Send } from './styles';

const MessageForm: FC = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [codeVisibility, toggleCodeVisibility, setCodeVisibility] = useBoolean(false);

  const [inputMessage, setInputMessage] = useState('');

  const onSuccess = () => {
    setText('');
    setCode('');
    setLanguage('typescript');
    setCodeVisibility(false);
    handleRemoveImage();
  };
  const { sendMessage } = useChat(onSuccess);

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

    if (image) {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'svryaukj');
      data.append('cloud_name', 'codebookspace');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/codebookspace/image/upload',
        data,
      );

      const { secure_url, width, height } = response.data;

      newMessage.image = { url: secure_url, width, height };
    }

    sendMessage(newMessage);
    setInputMessage('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setImage(file);
  };

  const handleRemoveImage = () => {
    setImage(undefined);
    setImageSrc(undefined);

    const fileInput = document.getElementById('fileInput');
    if (!fileInput) return;
    (fileInput as HTMLInputElement).value = '';
  };

  useEffect(() => {
    if (!image) return;
    setImageSrc(URL.createObjectURL(image));
  }, [image]);

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
