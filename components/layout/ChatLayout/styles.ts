import styled from 'styled-components';

import { Container as ChatHeaderContainer } from '@/components/ChatHeader/styles';
import { Container as ChatSidebarContainer } from '@/components/ChatSidebar/styles';

export const Content = styled.div`
  grid-area: chat-content;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.border};
`;

export const Container = styled.div<{ hideChat: boolean }>`
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'chat-header chat-content' 'chat-sidebar chat-content';
  overflow: hidden;
  @media (max-width: 992px) {
    grid-template-columns: auto;
    ${({ hideChat }) =>
      hideChat
        ? `
          grid-template-areas: 'chat-header' 'chat-sidebar'; 
          & ${Content} {
            display: none;
          }
        `
        : `
          grid-template-rows: auto;
          grid-template-areas: 'chat-content'; & ${ChatSidebarContainer} {
            display: none;
          }
          
          & ${ChatHeaderContainer} {
            display: none;
          }
        `}
  }
`;
