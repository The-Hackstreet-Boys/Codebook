import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.border};
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SectionHeading = styled.h4`
  margin: 1rem;
  font-size: ${(props) => props.theme.fontSizeMd};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
`;

export const ProfileContainer = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  color: ${(props) => props.theme.text};
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileMessage = styled.div`
  font-size: ${(props) => props.theme.fontSizeXs};
  color: ${(props) => props.theme.textSecondary};
`;
