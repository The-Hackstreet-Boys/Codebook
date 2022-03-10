import styled from 'styled-components';

export const BottomBar = styled.form`
  border-top: 1px solid ${({ theme }) => theme.overlay};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  height: 2.25rem;
  padding: 0 0.75rem;
  margin: 0.75rem 1rem;
`;

export const Input = styled.input`
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
  border-top: 1px solid ${({ theme }) => theme.border};
  margin-top: 0.5rem;
  padding-top: 1rem;
`;

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

export const Send = styled.button`
  background: none;
  border: none;
`;
