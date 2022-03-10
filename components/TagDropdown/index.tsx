import { FC } from 'react';
import { MdTag } from 'react-icons/md';

import { Button } from '@/components/PostForm/styles';
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';
import useTags from '@/hooks/queries/useTags';
import { Tag } from '@/models/tag';

interface Props {
  onSelect: (tag: Tag) => void;
}

const TagDropdown: FC<Props> = ({ onSelect }) => {
  const { data: tags } = useTags();

  return (
    <Dropdown>
      <DropdownToggle>
        <Button className="post-tags">
          <MdTag />
        </Button>
      </DropdownToggle>
      <DropdownMenu>
        {tags?.map((tag) => (
          <DropdownItem
            className="tag-option"
            key={tag._id}
            onClick={() => {
              onSelect(tag);
            }}
          >
            {tag.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TagDropdown;
