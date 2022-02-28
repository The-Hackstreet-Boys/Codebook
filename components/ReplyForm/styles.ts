import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: ${(props) => theme.text};
  font-size: ${(props) => theme.fontSizeSm};
  &::placeholder {
    color: ${(props) => theme.textSecondary};
    font-weight: ${(props) => theme.fontWeightMedium};
  }
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: ${(props) => theme.transition};
    color: ${(props) => theme.text};
    & :hover {
      color: ${(props) => theme.primary};
    }
  }
`;
