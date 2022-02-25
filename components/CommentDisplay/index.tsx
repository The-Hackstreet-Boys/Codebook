import { FC } from 'react';

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
    </Card>
  );
};

export default CommentDisplay;

// user display name, user avatar, date, text, likecount, replycount.