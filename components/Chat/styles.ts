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
  max-width: 100%;
`;

export const UserMessageLeft = styled.div`
  user-select: text;
  background: ${({ theme }) => theme.foregroundGradient};
  ${({ theme }) => theme.foregroundBlur}
  color: ${({ theme }) => theme.text};
  padding: 0.75rem;
  width: fit-content;
  max-width: min(100%, 40rem);
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

export const ImageContainer = styled.div`
  padding: 0.5rem 0.25rem 0;
  @media (max-width: 992px) {
    margin: 0 -0.5rem;
  }
`;
