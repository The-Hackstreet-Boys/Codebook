import styled from 'styled-components';

export const Container = styled.div`
  grid-area: chat-header;
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
