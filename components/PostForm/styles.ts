import styled from 'styled-components';

export const TextArea = styled.textarea`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  height: 5rem;
  resize: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeSm};
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.overlay};
  padding-top: 1rem;
  & svg {
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

export const ImagePreviewRemoveButton = styled.button`
  position: absolute;
  visibility: hidden;
  cursor: pointer;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.overlay2};
  & > svg {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.overlay3};
  }
`;

export const ImagePreviewContainer = styled.div`
  max-width: 15rem;
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${ImagePreviewRemoveButton} {
    visibility: visible;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
`;
