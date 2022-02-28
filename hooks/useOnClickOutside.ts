import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClick: (e: AnyEvent) => void,
) => {
  useEffect(() => {
    const listener = (e: AnyEvent) => {
      const element = ref?.current;

      if (!element || element.contains(e.target as Node)) return;

      onClick(e);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, onClick]);
};

export default useOnClickOutside;
