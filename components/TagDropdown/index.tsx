import { FC, useRef } from 'react';
import { MdTag } from 'react-icons/md';

import useTags from '../../hooks/queries/useTags';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Tag } from '../../models/tag';
import { Button } from '../PostForm/styles';
import { Dropdown, DropdownItem, DropdownMenu } from '../elements/Dropdown';

interface Props {
  addTag: (tag: Tag) => void;
}

const TagDropdown: FC<Props> = ({ addTag }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const { data: tags } = useTags();

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
              addTag(tag);
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
