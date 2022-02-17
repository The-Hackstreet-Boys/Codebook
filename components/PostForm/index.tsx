import { FC } from 'react';
import { MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import Card from '../elements/Card';
import './styles';
import { IconContainer, TextArea } from './styles';

const PostForm: FC = () => {
  return (
    <Card>
      <TextArea placeholder="What's on your mind?" />
      <IconContainer>
        <MdImage />
        <MdTag />
        <MdCode />
        <MdSend />
      </IconContainer>
    </Card>
  );
};

export default PostForm;
