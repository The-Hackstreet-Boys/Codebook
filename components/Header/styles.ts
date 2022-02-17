import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 12rem 1fr auto;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  grid-area: header;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${(props) => props.theme.foreground};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  & > svg {
    color: ${(props) => props.theme.textSecondary};
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    transition: ${(props) => props.theme.transition};
    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  &::placeholder {
    font-weight: ${(props) => props.theme.fontWeightRegular};
    color: ${(props) => props.theme.textSecondary};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  font-size: ${(props) => props.theme.fontSizeMd};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  color: ${(props) => props.theme.text};
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.textSecondary};
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    margin-right: 1rem;
    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`;
