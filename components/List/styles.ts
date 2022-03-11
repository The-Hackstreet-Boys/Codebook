import styled from 'styled-components';

export const RemoveButton = styled.button`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.overlay};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};
  ${({ theme }) => theme.shadow}
  & > svg {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background: ${({ theme }) => theme.overlay3} !important ;
    ${({ theme }) => theme.shadow}
  }
`;
