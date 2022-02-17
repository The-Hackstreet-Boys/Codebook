import styled from 'styled-components';

export const TextArea = styled.textarea`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  height: 5rem;
  resize: none;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSizeSm};
  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${(props) => props.theme.overlay};
  padding-top: 1rem;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    & :hover {
      color: ${(props) => props.theme.primary};
    }
  }
  & > svg:last-child {
    margin-left: auto;
  }
`;
