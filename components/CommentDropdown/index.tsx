import { FC, useRef } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import useDeleteComment from '../../hooks/mutations/useDeleteComment';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../elements/Dropdown';

interface Props {
  commentId: string;
}

const CommentDropdown: FC<Props> = ({ commentId }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const { mutate: deleteComment } = useDeleteComment(commentId);

  return (
    <Dropdown ref={ref} isOpen={isOpen}>
      <DropdownToggle onClick={toggleIsOpen}>
        <MdMoreHoriz />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => deleteComment()}>
          <MdDelete />
          Delete comment
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommentDropdown;
