import { FC, useRef } from 'react';
import { MdArrowDropDown, MdLogout, MdSettings } from 'react-icons/md';

import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ToggleTheme from '../ToggleTheme';

import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '../elements/Dropdown';

const HeaderDropdown: FC = () => {
  const [isVisible, toggleIsVisible, setIsVisible] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <Dropdown ref={ref} isOpen={isVisible}>
      <DropdownToggle onClick={toggleIsVisible}>
        <MdArrowDropDown />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <ToggleTheme />
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
      </DropdownMenu>
    </Dropdown>
  );
};

export default HeaderDropdown;
