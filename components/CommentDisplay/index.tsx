import { FC } from 'react';

import { Comment } from '../../models/comment';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';

interface Props {
  comment: Comment;
}

const CommentDisplay: FC<Props> = ({ comment }) => {
  const { author, text } = comment;

  return (
    <Card>
      <Flexbox gap="0.5rem">
        <Typography variant="h5" transform="capitalize">
          {author.name}
        </Typography>
        <Typography>{text}</Typography>
      </Flexbox>
    </Card>
  );
};

export default CommentDisplay;
