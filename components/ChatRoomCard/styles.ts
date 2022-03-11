import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 0.75rem 1rem;
`;

export const GroupIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ theme }) => theme.foregroundGradient};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
