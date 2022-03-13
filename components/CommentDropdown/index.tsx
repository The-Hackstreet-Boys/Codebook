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
        <DropdownToggleButton data-testid="delete-button">
          <MdMoreHoriz />
        </DropdownToggleButton>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => deleteComment()} data-testid="delete-item">
          <MdDelete />
          Delete comment
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommentDropdown;
