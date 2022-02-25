import { FC } from 'react';

<<<<<<< HEAD
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { Container } from '../Header/styles';




const CommentDisplay: FC = () => {

  return (
    <Card>
      <Container>
      <Flexbox gap="0.5rem">
        <Typography variant="h5" transform="capitalize">
          Working
        </Typography>
        <Typography></Typography>
      </Flexbox>
      </Container>
=======
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
>>>>>>> origin/main
    </Card>
  );
};

export default CommentDisplay;
<<<<<<< HEAD

// user display name, user avatar, date, text, likecount, replycount.
=======
>>>>>>> origin/main
