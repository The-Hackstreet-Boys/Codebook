import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
  & svg {
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    width: 2rem;
    height: 2rem;
    & :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
