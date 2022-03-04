import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding-bottom: 1rem;
`;

export const ImageContainer = styled.div`
  margin: 1rem -2rem;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.overlay};
  margin-top: 0.5rem;
  ${ImageContainer} ~ & {
    border-top: none;
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.overlay};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const MenuToggle = styled.button<{ isVisible: boolean }>`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, isVisible }) => (isVisible ? theme.overlay2 : 'none')};

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    background: ${({ theme }) => theme.overlay3};
    ${({ theme }) => theme.shadow}
  }
`;

export const RSSContainer = styled.div`
  z-index: 99;
  position: absolute;
  right: 0;
  top: 100%;
  transition: ${({ theme }) => theme.transition};
  width: 20rem;
  background: ${({ theme }) => theme.dropdown};
  background: ${({ theme }) => theme.dropdownGradient};
  ${({ theme }) => theme.foregroundBlur}
  ${({ theme }) => theme.shadow}
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ToggleRSS = styled.div<{ isOpen: boolean }>`
  position: relative;
  & ${RSSContainer} {
    margin-top: ${({ isOpen: shareVisibility }) => (shareVisibility ? '1rem' : '0')};
    visibility: ${({ isOpen: shareVisibility }) => (shareVisibility ? 'visible' : 'hidden')};
    opacity: ${({ isOpen: shareVisibility }) => (shareVisibility ? '1' : '0')};
    color: ${({ theme }) => theme.textSecondary};
    font-size: ${({ theme }) => theme.fontSizeXs};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
  }
`;
