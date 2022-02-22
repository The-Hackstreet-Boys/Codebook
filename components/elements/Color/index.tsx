import { FC } from 'react';

import { Primary, Secondary } from './styles';

export type ColorVariant = 'primary' | 'secondary';

export interface ColorProps {
  color?: ColorVariant;
}

const Color: FC<ColorProps> = ({ color = 'primary', ...props }) => {
  switch (color) {
    case 'primary':
      return <Primary {...props} />;
    case 'secondary':
      return <Secondary {...props} />;
  }
};

export default Color;
