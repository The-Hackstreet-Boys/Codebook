import styled from 'styled-components';

export const GroupIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ theme }) => theme.foregroundGradient};
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;
