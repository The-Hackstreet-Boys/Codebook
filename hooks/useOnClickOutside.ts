import { useEffect, useRef } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(onClick: (e: AnyEvent) => void) => {
  const ref = useRef<T>(null);

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

  return ref;
};

export default useOnClickOutside;
