import hljs from 'highlight.js';
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';

import Card from '@/components/elements/Card';
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';

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
  const isLastCharacterNewline = code[code.length - 1] == '\n';

  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  }, [code, language]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!setCode) return;
    setCode(e.target.value);
  };

  return (
    <Card padding="sm">
      {setLanguage && (
        <TopBar>
          <Dropdown>
            <DropdownToggle>
              <LanguageToggle>{language}</LanguageToggle>
            </DropdownToggle>
            <DropdownMenu>
              {LANGUAGES.map((l, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    setLanguage(l);
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
              {isLastCharacterNewline ? code + ' ' : code}
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
