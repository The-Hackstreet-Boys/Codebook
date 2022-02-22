import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreatePost from '../../hooks/mutations/useCreatePost';
import Card from '../elements/Card';
import './styles';
import { IconContainer, SubmitButton, TextArea } from './styles';

const PostForm: FC = () => {
  const [text, setText] = useState('');

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
        <IconContainer>
          <MdImage />
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
