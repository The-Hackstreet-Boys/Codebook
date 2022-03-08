import { ChangeEvent, FC, FormEvent, useState } from 'react';

import useChat from '@/contexts/ChatContext';

const MessageForm: FC = () => {
  const [text, setText] = useState('');
  const { sendMessage } = useChat();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessage({ text });

    setText('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChangeText} />
    </form>
  );
};

export default MessageForm;
