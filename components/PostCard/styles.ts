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
