import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';

import { ExtendedComment } from '../../hooks/queries/useComments';
import Avatar from '../elements/Avatar';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import { Timestamp } from './styles';

interface Props {
  comment: ExtendedComment;
}

const CommentCard: FC<Props> = ({ comment }) => {
  const { author, text, createdAt } = comment;

  return (
    <Flexbox gap="0.5rem">
      <Link href={`/users/${author._id}`}>
        <a>{author.picture && <Avatar src={author.picture} />}</a>
      </Link>
      <Flexbox direction="column" gap="0.3rem">
        <Card padding="md">
          <Flexbox direction="column">
            <Flexbox alignItems="center" gap="1rem">
              <Link href={`/users/${author._id}`}>
                <a>
                  <Typography variant="h6" transform="capitalize" isLink>
                    {author.name}
                  </Typography>
                </a>
              </Link>
            </Flexbox>
            <Typography>{text}</Typography>
          </Flexbox>
        </Card>
        <Timestamp>{dayjs(createdAt).format('DD MMM YYYY')}</Timestamp>
      </Flexbox>
    </Flexbox>
  );
};

export default CommentCard;
