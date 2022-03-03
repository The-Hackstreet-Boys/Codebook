import { FC, FormEvent, useRef } from 'react';
import { MdTag } from 'react-icons/md';

import useCreateTag from '../../hooks/mutations/useCreateTag';
import { ExtendedPost } from '../../hooks/queries/usePosts';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Flexbox } from '../elements/Box';
import Button from '../elements/Button';
import { Dropdown } from '../elements/Dropdown';
import { TagForm, TagInput, ToggleTag } from './styles';

interface Props {
  post: ExtendedPost;
}

const Tag: FC<Props> = ({ post }) => {
  const [isVisible, toggleIsVisible, setIsVisible] = useBoolean(false);
  // const { mutate: createTag } = useCreateTag(post._id);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ToggleTag ref={ref} isOpen={isVisible}>
      <MdTag onClick={toggleIsVisible} />
      <TagForm>
        <Dropdown ref={ref} isOpen={isVisible}>
          <Flexbox direction="row">
            <form onSubmit={handleSubmit}>
              <TagInput placeholder="Add a tag" />
              <Button size="sm">+</Button>
            </form>
          </Flexbox>
        </Dropdown>
      </TagForm>
    </ToggleTag>
  );
};

export default Tag;
