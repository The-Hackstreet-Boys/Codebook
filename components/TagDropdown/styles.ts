import styled from 'styled-components';

export const TagForm = styled.div`
  z-index: 99;
  position: absolute;
  left: 0;
  top: 50%;
  transition: ${({ theme }) => theme.transition};
  width: 15rem;
  background: ${({ theme }) => theme.dropdown};
  background: ${({ theme }) => theme.dropdownGradient};
  ${({ theme }) => theme.foregroundBlur}
  ${({ theme }) => theme.shadow}
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ToggleTag = styled.div<{ isOpen: boolean }>`
  position: relative;
  & ${TagForm} {
    margin-top: ${({ isOpen: isVisible }) => (isVisible ? '1rem' : '0')};
    visibility: ${({ isOpen: isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isOpen: isVisible }) => (isVisible ? '1' : '0')};
    color: ${({ theme }) => theme.textSecondary};
    font-size: ${({ theme }) => theme.fontSizeXs};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    padding: 1rem;
  }
`;

export const TagInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
