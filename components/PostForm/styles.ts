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
  & svg {
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

export const SubmitButton = styled.button`
  background: none;
  border: none;
  margin-left: auto;
`;

export const FileButton = styled.label`
  & > input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
  }
`;

export const ImagePreviewContainer = styled.div``;

export const ImagePreview = styled.img`
  width: 5rem;
`;
