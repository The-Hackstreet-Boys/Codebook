import { FC } from 'react';

import { H1, H2, H3, H4, H5, P } from './styles';

export type TypographyVariant = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TypographyAlign = 'left' | 'center' | 'right';
export type TypographyFont = 'primary' | 'secondary';

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  font?: TypographyFont;
  m?: string;
  p?: string;
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  align = 'left',
  font = 'primary',
  ...props
}) => {
  switch (variant) {
    case 'p':
      return <P align={align} font={font} {...props} />;
    case 'h1':
      return <H1 align={align} font={font} {...props} />;
    case 'h2':
      return <H2 align={align} font={font} {...props} />;
    case 'h3':
      return <H3 align={align} font={font} {...props} />;
    case 'h4':
      return <H4 align={align} font={font} {...props} />;
    case 'h5':
      return <H5 align={align} font={font} {...props} />;
  }
};

export default Typography;
