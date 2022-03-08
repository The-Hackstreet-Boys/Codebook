import { FC } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownToggleButton,
} from '@/components/elements/Dropdown';
import useDeletePost from '@/hooks/mutations/useDeletePost';

interface Props {
  postId: string;
}

const PostDropdown: FC<Props> = ({ postId }) => {
  const { mutate: deletePost } = useDeletePost(postId);

  return (
    <Dropdown>
      <DropdownToggle>
        <DropdownToggleButton>
          <MdMoreHoriz />
        </DropdownToggleButton>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => deletePost()}>
          <MdDelete />
          Delete post
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PostDropdown;
