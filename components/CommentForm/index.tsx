import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreateComment from '../../hooks/mutations/useCreateComment';
import Card from '../elements/Card';
import './styles';
import { IconContainer, SubmitButton, TextArea } from './styles';

interface Props {
  postId: string;
}

const CommentForm: FC<Props> = ({ postId }) => {
  const [text, setText] = useState('');

  const onSuccess = () => {
    setText('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment({ text });
  };

  const { mutate: createComment } = useCreateComment(onSuccess, postId);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="Write a comment..."
          value={text}
          required
          maxLength={2500}
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

export default CommentForm;
