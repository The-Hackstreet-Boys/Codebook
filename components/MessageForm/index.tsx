import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage, MdSend } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import Box from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import useChat, { NewMessage } from '@/contexts/ChatContext';
import useBoolean from '@/hooks/useBoolean';

import {
  Button,
  Container,
  FileButton,
  IconContainer,
  ImagePreview,
  ImagePreviewContainer,
  Input,
  RemoveButton,
  SubmitButton,
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

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage: NewMessage = { text };

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
    <Container>
      <form onSubmit={handleSubmit}>
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

        <Input
          placeholder="Message..."
          value={text}
          required
          maxLength={10000}
          onChange={handleChangeText}
        />

        <IconContainer>
          <FileButton active={!!image}>
            <MdImage />
            <input type="file" name="file" onChange={handleChange} id="fileInput" />
          </FileButton>
          <Button active={codeVisibility} onClick={toggleCodeVisibility}>
            <MdCode />
          </Button>
          <SubmitButton>
            <MdSend />
          </SubmitButton>
        </IconContainer>
      </form>
    </Container>
  );
};

export default MessageForm;
