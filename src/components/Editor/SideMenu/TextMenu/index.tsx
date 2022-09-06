import React from 'react';
import { useRecoilState } from 'recoil';

import { templateState } from '@stores/editor';
import { Container, ColorBox } from './style';

type ColorType = 'black' | 'white';

const ColorList: ColorType[] = ['black', 'white'];

const TextMenu: React.FC = () => {
  const [templateInfo, setTemplateInfo] = useRecoilState(templateState);

  return (
    <Container>
      {ColorList.map((c) => (
        <ColorBox
          key={`color${c}`}
          color={c}
          focus={templateInfo.textColor === c}
          onClick={() => {
            setTemplateInfo((prev) => {
              return { ...prev, textColor: c };
            });
          }}
        />
      ))}
    </Container>
  );
};

export default TextMenu;
