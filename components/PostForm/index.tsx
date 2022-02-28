import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreatePost from '../../hooks/mutations/useCreatePost';
import Card from '../elements/Card';
import './styles';
import { IconContainer, SubmitButton, TextArea } from './styles';

const PostForm: FC = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();

  const onSuccess = () => {
    setText('');
    setImage(undefined);
    setImageSrc(undefined);

    const fileInput = document.getElementById('fileInput');
    if (!fileInput) return;
    (fileInput as HTMLInputElement).value = '';
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      createPost({ text, picture: { url: secure_url, width, height } });
      return;
    }

    createPost({ text });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setImage(file);
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
          <Image src={imageSrc} alt="Uploaded" width={100} height={100} />
        )}
        <IconContainer>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            id="fileInput"
          />
          {/* <MdImage /> */}
          <MdTag />
          <MdCode />
          <SubmitButton>
            <MdSend />
          </SubmitButton>
        </IconContainer>
      </form>
    </Card>
  );
};

export default PostForm;
