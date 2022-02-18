import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  background: ${(props) => props.theme.foreground};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    112deg,
    ${(props) => props.theme.foreground},
    ${(props) => props.theme.primary} 500%
  );
  padding: 2rem;
  border-radius: 0.25rem;
`;

export default Card;
