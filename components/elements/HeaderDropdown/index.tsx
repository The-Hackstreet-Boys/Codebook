import { FC, useRef } from 'react';
import {
  MdArrowDropDown,
  MdDarkMode,
  MdLogout,
  MdSettings,
} from 'react-icons/md';

import useBoolean from '../../../hooks/useBoolean';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Box from '../Box';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownToggle,
} from './styles';

const HeaderDropdown: FC = () => {
  const {
    value: isVisible,
    toggle: toggleIsVisible,
    setValue: setIsVisible,
  } = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <Box position="relative" ref={ref}>
      <DropdownToggle onClick={toggleIsVisible} isVisible={isVisible}>
        <MdArrowDropDown />
      </DropdownToggle>
      <Dropdown isVisible={isVisible}>
        <DropdownItem>
          <MdDarkMode />
          Theme: Dark
        </DropdownItem>
        <DropdownItem>
          <MdSettings />
          Settings
        </DropdownItem>
        <DropdownDivider />
        {
          // eslint-disable-next-line
          <a href="/api/auth/logout">
            <DropdownItem>
              <MdLogout />
              Log out
            </DropdownItem>
          </a>
        }
      </Dropdown>
    </Box>
  );
};

export default HeaderDropdown;
