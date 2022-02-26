import Link from 'next/link';
import { FC } from 'react';
import { MdComment, MdFavorite } from 'react-icons/md';

import useLikeComment from '../../hooks/mutations/useLikeComment';
import { ExtendedComment } from '../../hooks/queries/useComments';
import useBoolean from '../../hooks/useBoolean';
import RepliesList from '../RepliesList';
import Avatar from '../elements/Avatar';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import IconButton from '../elements/IconButton';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import { Container, IconButtonContainer } from './styles';

interface Props {
  comment: ExtendedComment;
}

const CommentCard: FC<Props> = ({ comment }) => {
  const { author, text, createdAt, likeCount, replyCount, hasLiked } = comment;
  const { value: repliesVisibility, toggle: toggleRepliesVisibility } =
    useBoolean(false);
  const { mutate: likeComment } = useLikeComment(comment.post, comment._id);

  return (
    <Flexbox direction="column" gap="0.5rem">
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar src={author.picture} />}</a>
        </Link>
        <Flexbox direction="column" gap="0.2rem" width="fit-content">
          <Card padding="sm">
            <Flexbox direction="column" gap="0.2rem">
              <Link href={`/users/${author._id}`}>
                <a>
                  <Typography variant="h6" transform="capitalize" isClickable>
                    {author.name}
                  </Typography>
                </a>
              </Link>
              <Typography>{text}</Typography>
              <IconButtonContainer>
                <IconButton
                  size="sm"
                  grow={false}
                  onClick={() => likeComment()}
                  secondary={hasLiked}
                >
                  <MdFavorite /> {likeCount}
                </IconButton>
                <IconButton
                  size="sm"
                  grow={false}
                  onClick={toggleRepliesVisibility}
                >
                  <MdComment /> {replyCount}
                </IconButton>
              </IconButtonContainer>
            </Flexbox>
          </Card>
          <Box marginLeft="0.5rem">
            <Timestamp date={createdAt} />
          </Box>
        </Flexbox>
      </Container>
      {repliesVisibility && (
        <Box marginLeft="3.25rem">
          <RepliesList
            postId={comment.post}
            commentId={comment._id}
            commentAuthorName={comment.author.name}
          />
        </Box>
      )}
    </Flexbox>
  );
};

export default CommentCard;
