import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdSend } from 'react-icons/md';

import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import useCreateReply from '@/hooks/mutations/useCreateReply';
import { ExtendedComment } from '@/models/comment';

import { Input, SubmitButton } from './styles';

interface Props {
  comment: ExtendedComment;
}

const ReplyForm: FC<Props> = ({ comment }) => {
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

  const { mutate: createReply } = useCreateReply(onSuccess, comment);

  return (
    <Card padding="sm">
      <form onSubmit={handleSubmit} data-testid="reply-form">
        <Flexbox gap="1rem">
          <Input
            placeholder={`Reply to ${comment.author.name}...`}
            value={text}
            required
            maxLength={2500}
            onChange={handleChangeText}
          />
          <SubmitButton data-testid="submit-reply">
            <MdSend />
          </SubmitButton>
        </Flexbox>
      </form>
    </Card>
  );
};

export default ReplyForm;
