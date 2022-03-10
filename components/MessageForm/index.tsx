import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import Box from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import useChat, { NewMessage } from '@/contexts/ChatContext';
import useBoolean from '@/hooks/useBoolean';

import {
  BottomBar,
  Button,
  FileButton,
  IconContainer,
  ImagePreview,
  ImagePreviewContainer,
  Input,
  InputContainer,
  RemoveButton,
  Send,
} from './styles';

const MessageForm: FC = () => {
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [codeVisibility, toggleCodeVisibility, setCodeVisibility] = useBoolean(false);

  const [text, setText] = useState('');

  const onSuccess = () => {
    setText('');
    setCode('');
    setLanguage('typescript');
    setCodeVisibility(false);
    handleRemoveImage();
  };

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
    onSuccess();
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
    <BottomBar onSubmit={handleSubmit}>
      <InputContainer>
        <Input placeholder="Message" type="text" onChange={handleChangeInputMessage} value={text} />
        <Button disabled={text.length === 0}>
          <Send />
        </Button>
      </InputContainer>

      {imageSrc && (
        <Box width="fit-content" marginBottom="1rem">
          <Card padding="sm">
            <ImagePreviewContainer>
              <ImagePreview src={imageSrc} alt="Uploaded image" />
              <RemoveButton>
                <MdClose onClick={handleRemoveImage} />
              </RemoveButton>
            </ImagePreviewContainer>
          </Card>
        </Box>
      )}

      {codeVisibility && (
        <CodeBlock language={language} setLanguage={setLanguage} code={code} setCode={setCode} />
      )}

      <IconContainer>
        <FileButton active={!!image}>
          <MdImage />
          <input type="file" name="file" onChange={handleChange} id="fileInput" />
        </FileButton>
        <Button active={codeVisibility} onClick={toggleCodeVisibility}>
          <MdCode />
        </Button>
      </IconContainer>
    </BottomBar>
  );
};

export default MessageForm;
