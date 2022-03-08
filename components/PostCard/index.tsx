import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdBookmarkRemove, MdComment, MdFavorite } from 'react-icons/md';

import CodeBlock from '@/components/CodeBlock';
import CommentList from '@/components/CommentList';
import PostDropdown from '@/components/PostDropdown';
import ShareDropdown from '@/components/ShareDropdown';
import TagList from '@/components/TagList';
import Avatar from '@/components/elements/Avatar';
import Box, { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import IconButton from '@/components/elements/IconButton';
import Timestamp from '@/components/elements/Timestamp';
import Typography from '@/components/elements/Typography';
import useLikePost from '@/hooks/mutations/useLikePost';
import useSavePost from '@/hooks/mutations/useSavePost';
import usePost from '@/hooks/queries/usePost';
import useBoolean from '@/hooks/useBoolean';
import { ExtendedPost } from '@/models/post';

import { Container, IconButtonContainer, ImageContainer, TextContainer } from './styles';

interface Props {
  post: ExtendedPost;
}

const PostCard: FC<Props> = ({ post: initialPost }) => {
  const { data: post, isError } = usePost(initialPost._id, initialPost);
  const { mutate: likePost } = useLikePost(initialPost._id);
  const { mutate: savePost } = useSavePost(initialPost._id);
  const [commentsVisibility, toggleCommentsVisibility] = useBoolean(false);

  if (!post || isError) return <></>;

  const {
    author,
    text,
    likeCount,
    commentCount,
    createdAt,
    hasLiked,
    hasSaved,
    code,
    image,
    tags,
  } = post;

  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar user={author} />}</a>
        </Link>
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
      </Container>
      <TextContainer>
        <Typography>{text}</Typography>
      </TextContainer>
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

      <TagList tags={tags} />

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
        <ShareDropdown postId={post._id} />
      </IconButtonContainer>

      {commentsVisibility && <CommentList postId={post._id} />}
    </Card>
  );
};

export * from './skeleton';
export default PostCard;
