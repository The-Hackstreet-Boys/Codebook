import styled from 'styled-components';

export const TopBar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const LanguageToggle = styled.button.attrs({ type: 'button' })`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme.textSecondary};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const Container = styled.div`
  overflow: auto;
  max-height: 25rem;
`;

export const Content = styled.div`
  min-width: 100%;
  min-height: 10rem;
  display: grid;
`;

export const Pre = styled.pre`
  grid-column: 1;
  grid-row: 1;
  margin: 0;
`;

export const TextArea = styled.textarea`
  grid-column: 1;
  grid-row: 1;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  line-height: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  outline: none;
  color: transparent;
  background: transparent;
  caret-color: ${({ theme }) => theme.text};
  resize: none;
`;

export const Code = styled.code`
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
  color: ${({ theme }) => theme.code};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  line-height: 1.5rem;

  & .hljs-comment,
  & .hljs-quote {
    color: ${({ theme }) => theme.codeComments};
    font-style: italic;
  }

  & .hljs-deletion,
  & .hljs-name,
  & .hljs-section,
  & .hljs-selector-tag,
  & .hljs-subst,
  & .hljs-doctag,
  & .hljs-formula,
  & .hljs-keyword {
    color: ${({ theme }) => theme.codeSecondary};
  }

  & .hljs-literal,
  & .hljs-addition,
  & .hljs-attribute,
  & .hljs-meta & .hljs-string,
  & .hljs-regexp,
  & .hljs-string {
    color: ${({ theme }) => theme.codePrimary};
  }

  & .hljs-attr,
  & .hljs-number,
  & .hljs-selector-attr,
  & .hljs-selector-class,
  & .hljs-selector-pseudo,
  & .hljs-template-variable,
  & .hljs-type,
  & .hljs-variable,
  & .hljs-built_in,
  & .hljs-class & .hljs-title,
  & .hljs-title& .class_ {
    color: ${({ theme }) => theme.codeTertiary};
  }

  & .hljs-bullet,
  & .hljs-link,
  & .hljs-meta,
  & .hljs-selector-id,
  & .hljs-symbol,
  & .hljs-title {
    color: ${({ theme }) => theme.codeQuaternary};
  }

  & .hljs-emphasis {
    font-style: italic;
  }

  & .hljs-strong {
    font-weight: ${({ theme }) => theme.fontWeightBold};
  }

  & .hljs-link {
    text-decoration: underline;
  }
`;
