import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdSend } from 'react-icons/md';

import useCreateReply from '../../hooks/mutations/useCreateReply';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import './styles';
import { Input, SubmitButton } from './styles';

interface Props {
  postId: string;
  commentId: string;
  commentAuthorName: string;
}

const ReplyForm: FC<Props> = ({ postId, commentId, commentAuthorName }) => {
  const [text, setText] = useState('');

  const onSuccess = () => {
    setText('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createReply({ text });
  };

  const { mutate: createReply } = useCreateReply(onSuccess, postId, commentId);

  return (
    <Card padding="sm">
      <form onSubmit={handleSubmit}>
        <Flexbox gap="1rem">
          <Input
            placeholder={`Reply to ${commentAuthorName}...`}
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

export default ReplyForm;
