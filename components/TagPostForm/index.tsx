import { FC, useRef, useState } from 'react';
import { MdTag } from 'react-icons/md';
import useTags from '../../hooks/queries/useTags';

import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Tag } from '../../models/tag';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../elements/Dropdown';

interface Props {
  tag: string;
}

const TagDropdown: FC<Props> = ({ tag }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const [tags, setTags] = useTags<Tag[]>([]);


  return (
    <Dropdown ref={ref} isOpen={isOpen}>
      <MdTag />
      <DropdownToggle onClick={toggleIsOpen}></DropdownToggle>
      <DropdownMenu>
        
        {tags?.tags.map((tag) => (
          <DropdownItem key={tag._id}>{tag.name}</DropdownItem>
        ))}
        
      </DropdownMenu>
    </Dropdown>
  );
};

export default TagDropdown;
