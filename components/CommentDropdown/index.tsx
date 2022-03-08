import { FC, useState } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownToggleButton,
} from '@/components/elements/Dropdown';
import useDeleteComment from '@/hooks/mutations/useDeleteComment';

interface Props {
  commentId: string;
}

const CommentDropdown: FC<Props> = ({ commentId }) => {
  const { mutate: deleteComment } = useDeleteComment(commentId);

  return (
    <Dropdown>
      <DropdownToggle>
        <DropdownToggleButton>
          <MdMoreHoriz />
        </DropdownToggleButton>
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
