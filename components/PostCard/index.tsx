import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdBookmarkAdd, MdComment, MdFavorite, MdShare, MdMoreHoriz } from 'react-icons/md';

import useDeletePost from '../../hooks/mutations/useDeletePost';
import useLikePost from '../../hooks/mutations/useLikePost';
import { ExtendedPost } from '../../hooks/queries/usePosts';
import useBoolean from '../../hooks/useBoolean';
import CommentList from '../CommentList';
import Avatar from '../elements/Avatar';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import IconButton from '../elements/IconButton';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import './styles';
import { Container, IconButtonContainer, ImageContainer, MenuToggle } from './styles';

interface Props {
  post: ExtendedPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const { author, text, likeCount, commentCount, createdAt, hasLiked, image } =
    post;
  const { value: commentsVisibility, toggle: toggleCommentsVisibility } =
    useBoolean(false);
  const { mutate: likePost } = useLikePost(post._id);
  const { mutate: deletePost } = useDeletePost(post._id);

  return (
    <Card>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar user={author} />}</a>
        </Link>
        <Flexbox direction="column" gap="1rem">
            <Flexbox justifyContent='space-between'>
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
          <MenuToggle isVisbile={false} onClick={() => deletePost()}> <MdMoreHoriz/> </MenuToggle>
            </Flexbox>
          <Typography>{text}</Typography>
          
        </Flexbox>
      </Container>
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
