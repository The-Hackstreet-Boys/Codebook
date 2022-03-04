import { FC, useRef, useState } from 'react';
import { MdTag } from 'react-icons/md';

import useTags from '../../hooks/queries/useTags';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Tag } from '../../models/tag';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../elements/Dropdown';

interface Props {
  addTag: (tag:Tag)=> void;
}

const TagDropdown: FC<Props> = ({ addTag}) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const {data:tags}= useTags();

  return (
    <Dropdown ref={ref} isOpen={isOpen}>
      <MdTag onClick={toggleIsOpen}/>
      <DropdownMenu>
        {tags?.map((tag) => (
          <DropdownItem key={tag._id} onClick={()=> addTag(tag)}>{tag.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TagDropdown;
