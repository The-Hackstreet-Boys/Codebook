import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreatePost from '../../hooks/mutations/useCreatePost';
import Card from '../elements/Card';
import './styles';
import { IconContainer, SubmitButton, TextArea } from './styles';

const PostForm: FC = () => {
  const [text, setText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [uploadData, setUploadData] = useState('');

  const onSuccess = () => {
    setText('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost({ text });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);
  };

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
        {imageSrc}
        <IconContainer>
          <input type="file" name="file" onChange={handleChange} />
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
