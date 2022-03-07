import Link from 'next/link';
import { FC } from 'react';
import { MdComment, MdFavorite } from 'react-icons/md';

import CommentDropdown from '@/components/CommentDropdown';
import RepliesList from '@/components/RepliesList';
import Avatar from '@/components/elements/Avatar';
import Box, { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import IconButton from '@/components/elements/IconButton';
import Timestamp from '@/components/elements/Timestamp';
import Typography from '@/components/elements/Typography';
import useLikeComment from '@/hooks/mutations/useLikeComment';
import useBoolean from '@/hooks/useBoolean';
import { ExtendedCommentOrReply } from '@/models/comment';

import { Container, IconButtonContainer } from './styles';

interface Props {
  comment: ExtendedCommentOrReply;
}

const CommentCard: FC<Props> = ({ comment }) => {
  const { _id, type, author, text, createdAt, likeCount, hasLiked } = comment;

  const { mutate: likeReply } = useLikeComment(comment);
  const [repliesVisibility, toggleRepliesVisibility] = useBoolean();

  return (
    <>
      <Container>
        <Link href={`/users/${author._id}`}>
          <a>{author.picture && <Avatar user={author} />}</a>
        </Link>
        <Flexbox direction="column" gap="0.2rem" width="fit-content">
          <Flexbox alignItems="center" gap="0.5rem">
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
                    onClick={() => likeReply()}
                    secondary={hasLiked}
                  >
                    <MdFavorite /> {likeCount}
                  </IconButton>
                  {type === 'comment' && (
                    <IconButton size="sm" grow={false} onClick={toggleRepliesVisibility}>
                      <MdComment /> {comment.replyCount}
                    </IconButton>
                  )}
                </IconButtonContainer>
              </Flexbox>
            </Card>
            <CommentDropdown commentId={_id} />
          </Flexbox>
          <Box marginLeft="0.5rem">
            <Timestamp date={createdAt} />
          </Box>
        </Flexbox>
      </Container>

      {type === 'comment' && repliesVisibility && (
        <Box marginLeft="3.25rem">
          <RepliesList comment={comment} />
        </Box>
      )}
    </>
  );
};

export default CommentCard;
