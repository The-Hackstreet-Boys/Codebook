import { FC } from 'react';
import { MdTag } from 'react-icons/md';

import { Button } from '@/components/PostForm/styles';
import { Dropdown, DropdownItem, DropdownMenu } from '@/components/elements/Dropdown';
import useTags from '@/hooks/queries/useTags';
import useBoolean from '@/hooks/useBoolean';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { Tag } from '@/models/tag';

interface Props {
  onSelect: (tag: Tag) => void;
}

const TagDropdown: FC<Props> = ({ onSelect }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const { data: tags } = useTags();
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <Dropdown ref={ref} isOpen={isOpen} position="right">
      <Button>
        <MdTag onClick={toggleIsOpen} />
      </Button>
      <DropdownMenu>
        {tags?.map((tag) => (
          <DropdownItem
            key={tag._id}
            onClick={() => {
              onSelect(tag);
              setIsOpen(false);
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
