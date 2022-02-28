import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  grid-area: header;
`;

export const SearchBar = styled.div`
  width: clamp(20rem, 25rem, 30rem);
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

export const HeaderDropdownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: ${(props) => props.theme.textSecondary};
  transition: ${(props) => props.theme.transition};
  &:hover {
    color: ${(props) => props.theme.text};
  }
  & > svg {
    width: 2rem;
    height: 2rem;
  }
  &.active {
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.border};
    border-left: 0.25rem solid ${(props) => props.theme.primary};
    border-right: none;
    padding-left: 10rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.primary} -500%,
      transparent
    );
  }
`;
