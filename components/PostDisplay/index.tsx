import dayjs from 'dayjs';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import { Post } from '../../models/post';
import Avatar from '../elements/Avatar';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import './styles';
import { Button, ButtonContainer, Container, Timestamp } from './styles';

interface Props {
  post: Post;
}

const PostDisplay: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt } = post;

  return (
    <Card>
      <Container>
        {author.avatarURL && <Avatar src={author.avatarURL} />}
        <div>
          <Flexbox alignItems="center" gap="1rem">
            <Typography variant="h5" transform="capitalize">
              {author.displayName}
            </Typography>
            <Timestamp>{dayjs(createdAt).format('DD MMM YYYY')}</Timestamp>
          </Flexbox>
          <Typography>{text}</Typography>
        </div>
      </Container>
      <ButtonContainer>
        <Button>
          <MdFavorite /> {likeCount}
        </Button>
        <Button>
          <MdComment /> {commentCount}
        </Button>
        <Button>
          <MdBookmarkAdd />
        </Button>
        <Button>
          <MdShare />
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default PostDisplay;
