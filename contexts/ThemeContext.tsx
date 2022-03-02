import React, { FC, createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';

interface Props {
  isDarkTheme: boolean;
  toggleTheme?: () => void;
}

const defaultState = {
  isDarkTheme: true,
};

const ThemeContext = createContext<Props>(defaultState);

export const ThemeProvider: FC = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: dark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
