import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import useLikePost from '../../hooks/mutations/useLikePost';
import { ExtendedPost } from '../../hooks/queries/usePosts';
import useBoolean from '../../hooks/useBoolean';
import CommentList from '../CommentList';
import Avatar from '../elements/Avatar';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButton, IconButtonContainer } from './styles';

interface Props {
  post: ExtendedPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt, hasLiked } = post;
  const { value: commentsVisibility, toggle: toggleCommentsVisibility } =
    useBoolean(false);
  const { mutate: likePost } = useLikePost(post._id);

  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar src={author.picture} />}</a>
        </Link>
        <Flexbox direction="column" gap="1rem">
          <Box>
            <Link href={`/users/${author._id}`}>
              <a>
                <Typography variant="h5" transform="capitalize" isClickable>
                  {author.name}
                </Typography>
              </a>
            </Link>
            <Timestamp date={createdAt} />
          </Box>
          <Typography>{text}</Typography>
        </Flexbox>
      </Container>
      <IconButtonContainer>
        <IconButton onClick={() => likePost()} secondary={hasLiked}>
          <MdFavorite /> {likeCount}
        </IconButton>
        <IconButton onClick={toggleCommentsVisibility}>
          <MdComment /> {commentCount}
        </IconButton>
        <IconButton>
          <MdBookmarkAdd />
        </IconButton>
        <IconButton>
          <MdShare />
        </IconButton>
      </IconButtonContainer>
      {commentsVisibility && <CommentList postId={post._id} />}
    </Card>
  );
};

export default PostCard;
