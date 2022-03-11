import styled from 'styled-components';

export const ChatContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export const UserMessageAndNameContainer = styled.div``;

export const UserMessageContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const UserMessageLeft = styled.div`
  user-select: text;
  background: ${({ theme }) => theme.foregroundGradient};
  ${({ theme }) => theme.foregroundBlur}
  color: ${({ theme }) => theme.text};
  padding: 0.75rem;
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 500;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow-wrap: break-word;
  &:first-child {
    border-top-left-radius: 1rem;
  }
  &:last-child {
    border-bottom-left-radius: 1rem;
  }
`;

export const UserMessageContainerRight = styled(UserMessageContainerLeft)`
  align-items: flex-end;
`;

export const UserMessageRight = styled(UserMessageLeft)`
  background: ${({ theme }) => theme.primary};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  &:first-child {
    border-top-right-radius: 1rem;
  }
  &:last-child {
    border-bottom-right-radius: 1rem;
  }
`;

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
