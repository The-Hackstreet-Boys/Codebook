import Link from 'next/link';
import { FC } from 'react';

import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import { Tag } from '@/models/tag';

interface Props {
  tags: Tag[];
  onClick?: (tag: Tag) => void;
}

const TagList: FC<Props> = ({ tags, onClick }) => (
  <Flexbox gap="0.5rem" margin="0.5rem 0" flexWrap="wrap">
    {tags.map((tag) =>
      onClick ? (
        <div key={tag._id} onClick={() => onClick(tag)} data-testid="rendered-tag">
          <Card padding="xs">
            <Typography isClickable>{tag.name}</Typography>
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
