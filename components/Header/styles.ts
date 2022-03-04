import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  grid-area: header;
`;
