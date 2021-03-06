import styled from 'styled-components';

import { ToggleButton } from '@/components/elements/Dropdown/styles';

export const DropdownContainer = styled.div``;

export const Container = styled.div`
  ${DropdownContainer} ${ToggleButton} {
    opacity: 0;
  }
  &:hover {
    ${DropdownContainer} ${ToggleButton} {
      opacity: 1;
    }
  }
`;

export const TextContainer = styled.div`
  margin: 1.6rem 0 1.5rem 3.5rem;
  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

export const ImageContainer = styled.div`
  margin: 1rem -2rem;
  @media (max-width: 992px) {
    margin: 1rem -1.5rem;
  }
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

export const MenuToggle = styled.button<{ isOpen: boolean }>`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, isOpen }) => (isOpen ? theme.overlay2 : 'none')};

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
