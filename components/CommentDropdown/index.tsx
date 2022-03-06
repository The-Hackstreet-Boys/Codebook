import { FC } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';
import useDeleteComment from '@/hooks/mutations/useDeleteComment';
import useBoolean from '@/hooks/useBoolean';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface Props {
  commentId: string;
}

const CommentDropdown: FC<Props> = ({ commentId }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const { mutate: deleteComment } = useDeleteComment(commentId);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));

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
