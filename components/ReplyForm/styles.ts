import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeSm};
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
  }
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.text};
    & :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
