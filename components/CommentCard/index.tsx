import Link from 'next/link';
import { FC } from 'react';
import { MdComment, MdFavorite } from 'react-icons/md';

import useLikeComment from '../../hooks/mutations/useLikeComment';
import { ExtendedComment } from '../../hooks/queries/useComments';
import { ExtendedReply } from '../../hooks/queries/useReplies';
import useBoolean from '../../hooks/useBoolean';
import CommentDropdown from '../CommentDropdown';
import RepliesList from '../RepliesList';
import Avatar from '../elements/Avatar';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import IconButton from '../elements/IconButton';
import Timestamp from '../elements/Timestamp';
import Typography from '../elements/Typography';
import { Container, IconButtonContainer } from './styles';

interface Props {
  comment: ExtendedComment | ExtendedReply;
}

const CommentCard: FC<Props> = ({ comment }) => {
  const { _id, type, author, text, createdAt, likeCount, hasLiked } = comment;
  const { mutate: likeReply } = useLikeComment(comment);
  const [repliesVisibility, toggleRepliesVisibility] = useBoolean();
  const isComment = type === 'comment';

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
                  {isComment && (
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

      {isComment && repliesVisibility && (
        <Box marginLeft="3.25rem">
          <RepliesList comment={comment} />
        </Box>
      )}
    </>
  );
};

export default CommentCard;
