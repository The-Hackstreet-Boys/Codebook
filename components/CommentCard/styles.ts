import styled from 'styled-components';

import { ToggleButton } from '@/components/elements/Dropdown/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  ${ToggleButton} {
    opacity: 0;
  }
  &:hover {
    ${ToggleButton} {
      opacity: 1;
    }
  }
`;

export const IconButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.overlay};
  padding-top: 0.5rem;
`;
