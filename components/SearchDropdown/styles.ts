import styled from 'styled-components';

export const SearchInput = styled.input`
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  padding: 0.75rem;
  width: 100%;
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    color: ${({ theme }) => theme.textSecondary};
  }
`;
