import styled from 'styled-components';

export type PaddingSize = 'sm' | 'md' | 'lg';

interface Props {
  padding?: PaddingSize;
}

const Card = styled.div<Props>`
  width: 100%;
  background: ${({ theme }) => theme.foreground};
  background: ${({ theme }) => theme.foregroundGradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.shadow}
  ${({ padding = 'lg' }) => {
    switch (padding) {
      case 'sm':
        return 'padding: 0.75rem;';
      case 'md':
        return 'padding: 1rem;';
      case 'lg':
        return 'padding: 2rem;';
    }
  }}
`;

export default Card;
