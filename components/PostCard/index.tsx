import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import useChangeLikeStatus from '../../hooks/mutations/useChangeLikeStatus';
import { Post } from '../../models/post';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButton, Timestamp } from './styles';

interface Props {
  post: Post;
}

const PostCard: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt } = post;
  const { mutate: changeLikeStatus } = useChangeLikeStatus(post._id);
  const { user } = useAuth0User();

  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar src={author.picture} />}</a>
        </Link>
        <Flexbox direction="column" gap="0.5rem">
          <Flexbox alignItems="center" gap="1rem">
            <Link href={`/users/${author._id}`} passHref>
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
        <IconButton
          onClick={() =>
            changeLikeStatus(
              user?.sub
                ? (post.likes as unknown as string[]).includes(user.sub)
                : false,
            )
          }
        >
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
