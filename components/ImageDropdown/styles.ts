import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })<{ active?: boolean }>`
  background: none;
  border: none;
  padding: 0;
  &:last-child {
    margin-left: auto;
  }
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
  ${({ active, theme }) =>
    active &&
    `
    &>svg {
      color: ${theme.primary};
    }
  `}
`;

export const FileButton = styled(Button).attrs({ as: 'label' })`
  & > input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
  }
`;

export const RemoveButton = styled.button`
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
  &:hover ${RemoveButton} {
    visibility: visible;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
`;
