import { FC } from 'react';

import useDropdown, { DropdownProvider } from '@/contexts/DropdownContext';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { Container, Divider, Item } from './styles';

export const DropdownItem = Item;
export const DropdownDivider = Divider;
export * from './Menu';
export * from './Toggle';
export * from './ToggleButton';

const Dropdown: FC = ({ children }) => (
  <DropdownProvider>
    <DropdownWithoutProvider>{children}</DropdownWithoutProvider>
  </DropdownProvider>
);

const DropdownWithoutProvider: FC = ({ children }) => {
  const { setIsOpen } = useDropdown();
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return <Container ref={ref}>{children}</Container>;
};

export default Dropdown;
