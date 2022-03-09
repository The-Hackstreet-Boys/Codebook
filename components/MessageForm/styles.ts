import styled from 'styled-components';

export const BottomBar = styled.form`
  border-top: 1px solid ${({ theme }) => theme.border};
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
  flex: 1;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: 600;
  user-select: auto;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  background: none;
  border: none;
  outline: none;
`;

export const Button = styled.button<{ disabled: boolean }>`
  outline: 0;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => props.disabled && 'display: none;'}
`;

export const Send = styled.button``;
