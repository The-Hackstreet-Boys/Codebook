import { FC } from 'react';

import { Primary } from './styles';

export type ColorVariant = 'primary';

export interface ColorProps {
  color?: ColorVariant;
}

const Color: FC<ColorProps> = ({ color = 'primary', ...props }) => {
  switch (color) {
    case 'primary':
      return <Primary {...props} />;
  }
};

export default Color;
