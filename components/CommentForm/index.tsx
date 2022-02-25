import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdSend } from 'react-icons/md';

import useCreateComment from '../../hooks/mutations/useCreateComment';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import './styles';
import { Input, SubmitButton } from './styles';

interface Props {
  postId: string;
}

const CommentForm: FC<Props> = ({ postId }) => {
  const [text, setText] = useState('');

  const onSuccess = () => {
    setText('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment({ text });
  };

  const { mutate: createComment } = useCreateComment(onSuccess, postId);

  return (
    <Card padding="md">
      <form onSubmit={handleSubmit}>
        <Flexbox gap="1rem">
          <Input
            placeholder="Write a comment..."
            value={text}
            required
            maxLength={2500}
            onChange={handleChangeText}
          />
          <SubmitButton>
            <MdSend />
          </SubmitButton>
        </Flexbox>
      </form>
    </Card>
  );
};

export default CommentForm;
