import { FC, useRef } from 'react';
import { MdTag } from 'react-icons/md';

import useAssignTag from '../../hooks/mutations/useAssignTag';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../elements/Dropdown';

interface Props {
  tag: string;
}

const TagDropdown: FC<Props> = ({ tag }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const { mutate: assignTag } = useAssignTag(tag);

  return (
    <Dropdown ref={ref} isOpen={isOpen}>
      <MdTag />
      <DropdownToggle onClick={toggleIsOpen}></DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => assignTag(tag)}>Add Tag</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TagDropdown;
