import styled from 'styled-components';

export type PaddingSize = 'xs' | 'sm' | 'md' | 'lg';

interface Props {
  padding?: PaddingSize;
}

const Card = styled.div<Props>`
  width: 100%;
  background: ${({ theme }) => theme.foregroundGradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.shadow}
  ${({ padding = 'lg' }) => {
    switch (padding) {
      case 'xs':
        return 'padding: 0.45rem 0.75rem;';
      case 'sm':
        return 'padding: 0.75rem;';
      case 'md':
        return 'padding: 1rem;';
      case 'lg':
        return `
          padding: 2rem;
          @media (max-width: 992px) {
            padding: 1.5rem;
          }
        `;
    }
  }}
`;

export default Card;
