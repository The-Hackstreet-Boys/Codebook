import { ChangeEvent, FC, FormEvent, useState } from 'react';

import useSocket from '@/contexts/SocketContext';

const MessageForm: FC = () => {
  const [text, setText] = useState('');
  const { socket } = useSocket();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!socket) return;

    socket.emit('message', text);

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
