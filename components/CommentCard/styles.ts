import styled from 'styled-components';

import { DropdownToggle } from '@/components/elements/Dropdown';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  ${DropdownToggle} {
    opacity: 0;
  }
  &:hover {
    ${DropdownToggle} {
      opacity: 1;
    }
  }
`;

export const IconButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.overlay};
  padding-top: 0.5rem;
`;
