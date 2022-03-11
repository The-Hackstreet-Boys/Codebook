import Link from 'next/link';
import { FC } from 'react';
import { MdClose } from 'react-icons/md';

import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import { Tag } from '@/models/tag';

import { RemoveButton } from './styles';

interface Props {
  tags: Tag[];
  onDelete?: (tag: Tag) => void;
}

const TagList: FC<Props> = ({ tags, onDelete }) => (
  <Flexbox gap="0.5rem" margin="0.5rem 0" flexWrap="wrap">
    {tags.map((tag) =>
      onDelete ? (
        <div key={tag._id}>
          <Card padding="xs">
            <Flexbox gap="0.5rem" alignItems="center">
              <Typography>{tag.name}</Typography>
              <RemoveButton onClick={() => onDelete(tag)}>
                <MdClose />
              </RemoveButton>
            </Flexbox>
          </Card>
        </div>
      ) : (
        <div key={tag._id}>
          <Link href={`/tags/${tag._id}`} passHref>
            <Card padding="xs">
              <Typography isClickable>{tag.name}</Typography>
            </Card>
          </Link>
        </div>
      ),
    )}
  </Flexbox>
);

export default TagList;
