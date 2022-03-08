import { VirtualElement } from '@floating-ui/core';
import { Strategy, autoPlacement, offset, shift, useFloating } from '@floating-ui/react-dom';
import React, { Dispatch, FC, SetStateAction, createContext, useContext } from 'react';

import useBoolean from '@/hooks/useBoolean';

interface State {
  isOpen: boolean;
  toggleIsOpen: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  x: number | null;
  y: number | null;
  reference: (node: Element | VirtualElement | null) => void;
  floating: (node: HTMLElement | null) => void;
  strategy: Strategy;
}

const DropdownContext = createContext<State>({} as State);

export const DropdownProvider: FC = ({ children }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);

  const middleware = [
    autoPlacement({
      allowedPlacements: ['bottom', 'top'],
    }),
    offset(16),
    shift({ padding: 16 }),
  ];

  const { x, y, reference, floating, strategy } = useFloating({
    middleware,
  });

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleIsOpen,
        setIsOpen,
        x,
        y,
        reference,
        floating,
        strategy,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdown = () => useContext(DropdownContext);

export default useDropdown;
