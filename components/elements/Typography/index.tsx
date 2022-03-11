import { FC, MouseEvent } from 'react';

import { H1, H2, H3, H4, H5, H6, P } from './styles';

export type TypographyVariant = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TypographyAlign = 'left' | 'center' | 'right';
export type TypographyFont = 'primary' | 'secondary';
export type TypographyTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  font?: TypographyFont;
  transform?: TypographyTransform;
  m?: string;
  p?: string;
  isClickable?: boolean;
  noWrap?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  align = 'left',
  font = 'primary',
  transform = 'none',
  ...props
}) => {
  switch (variant) {
    case 'p':
      return <P align={align} font={font} transform={transform} {...props} />;
    case 'h1':
      return <H1 align={align} font={font} transform={transform} {...props} />;
    case 'h2':
      return <H2 align={align} font={font} transform={transform} {...props} />;
    case 'h3':
      return <H3 align={align} font={font} transform={transform} {...props} />;
    case 'h4':
      return <H4 align={align} font={font} transform={transform} {...props} />;
    case 'h5':
      return <H5 align={align} font={font} transform={transform} {...props} />;
    case 'h6':
      return <H6 align={align} font={font} transform={transform} {...props} />;
  }
};

export default Typography;
