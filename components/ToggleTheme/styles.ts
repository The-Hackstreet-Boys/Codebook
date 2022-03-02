import styled from 'styled-components';

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  & > svg {
    transition: fill 150ms;
    height: 1.25rem;
    width: 1.25rem;
  }
`;
