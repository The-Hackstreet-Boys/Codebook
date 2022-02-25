import dayjs from 'dayjs';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import { Post } from '../../models/post';
import LikeButton from '../LikeButton';
import Avatar from '../elements/Avatar';
import Card from '../elements/Card';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButton, Timestamp } from './styles';
import useComments from '../../hooks/queries/useComments';
import CommentDisplay from '../CommentDisplay';


interface Props {
  post: Post;
}

const PostDisplay: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt } = post;

  return (
    <Card>
      <Container>
        {author.picture && <Avatar src={author.picture} />}
        <Flexbox direction="column" gap="0.5rem">
          <Flexbox alignItems="center" gap="1rem">
            <Typography variant="h5" transform="capitalize">
              {author.name}
            </Typography>
            <Timestamp>{dayjs(createdAt).format('DD MMM YYYY')}</Timestamp>
          </Flexbox>
          <Typography>{text}</Typography>
        </Flexbox>
      </Container>
      <Flexbox marginTop="1rem">
        <LikeButton>{likeCount}</LikeButton>
        {/* <IconButton>
          <MdFavorite /> {likeCount}
        </IconButton> */}
        <IconButton>
          <MdComment /> {commentCount}
        </IconButton>
        <IconButton>
          <MdBookmarkAdd />
        </IconButton>
        <IconButton>
          <MdShare />
        </IconButton>
      </Flexbox>
      <CommentDisplay comment={comment} key={comment._id}/>
    </Card>
  );
};

export default PostDisplay;
