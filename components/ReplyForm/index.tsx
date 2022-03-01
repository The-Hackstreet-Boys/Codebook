import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MdSend } from 'react-icons/md';

import useCreateReply from '../../hooks/mutations/useCreateReply';
import { ExtendedComment } from '../../hooks/queries/useComments';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import './styles';
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

  const { mutate: createReply } = useCreateReply(onSuccess,comment);

  return (
    <Card padding="sm">
      <form onSubmit={handleSubmit}>
        <Flexbox gap="1rem">
          <Input
            placeholder={`Reply to ${comment.author.name}...`}
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
