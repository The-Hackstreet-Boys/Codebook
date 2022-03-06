import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: clamp(20rem, 25rem, 30rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  & > svg {
    color: ${({ theme }) => theme.textSecondary};
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    transition: ${({ theme }) => theme.transition};
    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    color: ${({ theme }) => theme.textSecondary};
  }
`;