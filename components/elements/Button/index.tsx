import { ButtonHTMLAttributes, FC } from 'react';

import { PrimaryButton, SecondaryButton } from './styles';

export type ButtonColor = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  isFullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  size = 'md',
  ...props
}) => {
  switch (color) {
    case 'primary':
      return <PrimaryButton size={size} {...props} />;
    case 'secondary':
      return <SecondaryButton size={size} {...props} />;
  }
};

export default Button;
