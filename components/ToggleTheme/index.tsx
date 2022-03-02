import { FC, useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import ThemeContext from '../../contexts/ThemeContext';
import { Flexbox } from '../elements/Box';
import { ThemeToggle } from './styles';

const ToggleTheme: FC = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeToggle onClick={toggleTheme}>
      {isDarkTheme === true ? (
        <>
          <MdDarkMode />
          Theme: Dark
        </>
      ) : (
        <>
          <MdLightMode /> Theme: Light
        </>
      )}
    </ThemeToggle>
  );
};

export default ToggleTheme;
