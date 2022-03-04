import hljs from 'highlight.js';
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';

import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Card from '../elements/Card';
import { Dropdown, DropdownItem, DropdownMenu } from '../elements/Dropdown';
import { Code, Container, Content, LanguageToggle, Pre, TextArea, TopBar } from './styles';

const LANGUAGES = [
  'arduino',
  'basic',
  'c',
  'c++',
  'csharp',
  'css',
  'dart',
  'dockerfile',
  'graphql',
  'haskell',
  'html',
  'java',
  'javascript',
  'python',
  'ruby',
  'rust',
  'scss',
  'typescript',
];

interface Props {
  language: string;
  setLanguage?: Dispatch<SetStateAction<string>>;
  code: string;
  setCode?: Dispatch<SetStateAction<string>>;
}

const CodeBlock: FC<Props> = ({ language, setLanguage, code, setCode }) => {
  const ref = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);

  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  }, [code, language]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (setCode) setCode(e.target.value.replace(/\n*$/, ''));
    // Remove the trailing newline(s)
  };

  return (
    <Card padding="sm">
      {setLanguage && (
        <TopBar>
          <Dropdown ref={dropdownRef} isOpen={isOpen} position="right">
            <LanguageToggle onClick={toggleIsOpen} type="button">
              {language}
            </LanguageToggle>
            <DropdownMenu>
              {LANGUAGES.map((l, index) => (
                <DropdownItem
                  type="button"
                  key="index"
                  onClick={() => {
                    setLanguage(l);
                    setIsOpen(false);
                  }}
                >
                  {l}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </TopBar>
      )}
      <Container>
        <Content>
          <Pre>
            <Code ref={ref} className={language}>
              {code}
            </Code>
          </Pre>
          {setCode && (
            <TextArea autoFocus spellCheck="false" value={code} onChange={handleChange} />
          )}
        </Content>
      </Container>
    </Card>
  );
};

export default CodeBlock;
