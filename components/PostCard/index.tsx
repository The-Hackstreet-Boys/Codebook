import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdBookmarkRemove, MdComment, MdFavorite, MdShare } from 'react-icons/md';

import useLikePost from '../../hooks/mutations/useLikePost';
import useSavePost from '../../hooks/mutations/useSavePost';
import { ExtendedPost } from '../../hooks/queries/usePosts';
import useBoolean from '../../hooks/useBoolean';
import CodeBlock from '../CodeBlock';
import CommentList from '../CommentList';
import PostDropdown from '../PostDropdown';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import IconButton from '../elements/IconButton';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButtonContainer, ImageContainer } from './styles';

interface Props {
  post: ExtendedPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt, hasLiked, hasSaved, code, image } =
    post;
  const [commentsVisibility, toggleCommentsVisibility] = useBoolean(false);
  const { mutate: likePost } = useLikePost(post._id);
  const { mutate: savePost } = useSavePost(post._id);
  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar user={author} />}</a>
        </Link>
        <Flexbox direction="column" gap="1rem">
          <Flexbox justifyContent="space-between">
            <div>
              <Link href={`/users/${author._id}`}>
                <a>
                  <Typography variant="h5" transform="capitalize" isClickable>
                    {author.name}
                  </Typography>
                </a>
              </Link>
              <Timestamp date={createdAt} />
            </div>
            <PostDropdown postId={post._id} />
          </Flexbox>
          <Typography>{text}</Typography>
        </Flexbox>
      </Container>
      {code && <CodeBlock code={code.text} language={code.language} />}
      {image && (
        <ImageContainer>
          <Image
            src={image.url}
            alt="post image"
            height={image.height}
            width={image.width}
            layout="responsive"
          />
        </ImageContainer>
      )}
      <IconButtonContainer>
        <IconButton onClick={() => likePost()} secondary={hasLiked}>
          <MdFavorite /> {likeCount}
        </IconButton>
        <IconButton onClick={toggleCommentsVisibility}>
          <MdComment /> {commentCount}
        </IconButton>
        <IconButton onClick={() => savePost()} secondary={hasSaved}>
          {hasSaved ? <MdBookmarkRemove /> : <MdBookmarkAdd />}
        </IconButton>
        <IconButton>
          <MdShare />
        </IconButton>
      </IconButtonContainer>
      {commentsVisibility && <CommentList postId={post._id} />}
    </Card>
  );
};

export * from './skeleton';
export default PostCard;
