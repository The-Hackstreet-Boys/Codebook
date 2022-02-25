import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import useLikePost from '../../hooks/mutations/useLikePost';
import { ExtendedPost } from '../../hooks/queries/usePosts';
import { Post } from '../../models/post';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButton, Timestamp } from './styles';

interface Props {
  post: ExtendedPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt, hasLiked } = post;
  const { mutate: likePost } = useLikePost(post._id);

  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar src={author.picture} />}</a>
        </Link>
        <Flexbox direction="column" gap="0.5rem">
          <Flexbox alignItems="center" gap="1rem">
            <Link href={`/users/${author._id}`}>
              <a>
                <Typography variant="h5" transform="capitalize" isLink>
                  {author.name}
                </Typography>
              </a>
            </Link>
            <Timestamp>{dayjs(createdAt).format('DD MMM YYYY')}</Timestamp>
          </Flexbox>
          <Typography>{text}</Typography>
        </Flexbox>
      </Container>
      <Flexbox marginTop="1rem">
        <IconButton onClick={() => likePost()} secondary={hasLiked}>
          <MdFavorite /> {likeCount}
        </IconButton>
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
    </Card>
  );
};

export default PostCard;
