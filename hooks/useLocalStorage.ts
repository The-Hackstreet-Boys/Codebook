import { useEffect, useState } from 'react';

type ReturnType<T> = [T, (newValue: T) => void];

const useLocalStorage = <T>(key: string, defaultValue: T): ReturnType<T> => {
  const [value, setState] = useState(defaultValue);

  useEffect(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) setState(JSON.parse(localValue));
  }, [key]);

  const setValue = (newValue: T) => {
    setState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue];
};

export default useLocalStorage;
