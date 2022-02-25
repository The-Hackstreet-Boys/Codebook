import styled from 'styled-components';

export type PaddingSize = 'sm' | 'md' | 'lg';

interface Props {
  padding?: PaddingSize;
}

const Card = styled.div<Props>`
  width: 100%;
  background: ${(props) => props.theme.foreground};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    112.5deg,
    ${(props) => props.theme.foreground},
    ${(props) => props.theme.primary} 500%
  );
  ${({ padding = 'lg' }) => {
    switch (padding) {
      case 'sm':
        return 'padding: 0.5rem;';
      case 'md':
        return 'padding: 1rem;';
      case 'lg':
        return 'padding: 2rem;';
    }
  }}
  border-radius: 0.25rem;
`;

export default Card;
