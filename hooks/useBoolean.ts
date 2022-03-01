import { Dispatch, SetStateAction, useState } from 'react';

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useBoolean = (defaultValue = false): ReturnType => {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = () => setValue((x) => !x);

  return [value, toggleValue, setValue];
};

export default useBoolean;
