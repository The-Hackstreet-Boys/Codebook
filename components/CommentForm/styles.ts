import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSizeSm};
  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    color: ${(props) => props.theme.text};
    & :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
