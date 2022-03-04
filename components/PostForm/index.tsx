import axios from 'axios';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreatePost, { NewPost } from '../../hooks/mutations/useCreatePost';
import useBoolean from '../../hooks/useBoolean';
import CodeBlock from '../CodeBlock';
import Box from '../elements/Box';
import Card from '../elements/Card';
import './styles';
import {
  Button,
  FileButton,
  IconContainer,
  ImagePreview,
  ImagePreviewContainer,
  RemoveButton,
  TextArea,
} from './styles';

const PostForm: FC = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [codeVisibility, toggleCodeVisibility, setCodeVisibility] = useBoolean(false);

  const onSuccess = () => {
    setText('');
    setCode('');
    setLanguage('typescript');
    setCodeVisibility(false);
    handleRemoveImage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: NewPost = { text };

    if (codeVisibility && code.length) {
      newPost.code = {
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

      newPost.image = { url: secure_url, width, height };
    }

    createPost(newPost);
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

  const { mutate: createPost } = useCreatePost(onSuccess);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="What's on your mind?"
          value={text}
          required
          maxLength={10000}
          onChange={handleChangeText}
        />
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
          <Button type="button">
            <MdTag />
          </Button>
          <Button type="button" active={codeVisibility} onClick={toggleCodeVisibility}>
            <MdCode />
          </Button>
          <Button>
            <MdSend />
          </Button>
        </IconContainer>
      </form>
    </Card>
  );
};

export default PostForm;
