import { FC, FormEvent, useRef } from 'react';
import { MdTag } from 'react-icons/md';

import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Flexbox } from '../elements/Box';
import Button from '../elements/Button';
import { TagForm, TagInput, ToggleTag } from './styles';

const Tag: FC = () => {
  const [isVisible, toggleIsVisible, setIsVisible] = useBoolean(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ToggleTag ref={ref} isOpen={isVisible}>
      <MdTag onClick={toggleIsVisible} />
      <TagForm>
        <Flexbox direction="row">
          <form onSubmit={handleSubmit}>
            <TagInput placeholder="Add a tag" />
            <Button size="sm">+</Button>
          </form>
        </Flexbox>
      </TagForm>
    </ToggleTag>
  );
};

export default Tag;
