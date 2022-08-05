import React from 'react';
import { useRecoilState } from 'recoil';

import { templateState } from '@stores/editor';
import interpark from '@images/template/interpark.png';
import yes24 from '@images/template/yes24.png';
import melon from '@images/template/melon.png';
import { Container, TemplateImage } from './style';

const TemplateMenu: React.FC = () => {
  const [templateInfo, setTemplateInfo] = useRecoilState(templateState);

  return (
    <Container>
      <TemplateImage
        onClick={() => {
          setTemplateInfo((prev) => {
            return { ...prev, templateType: 'interpark' };
          });
        }}
        src={interpark}
        alt="티켓 템플릿 사진"
        focus={templateInfo.templateType === 'interpark'}
      />
      <TemplateImage
        onClick={() => {
          setTemplateInfo((prev) => {
            return { ...prev, templateType: 'yes24' };
          });
        }}
        src={yes24}
        alt="티켓 템플릿 사진"
        focus={templateInfo.templateType === 'yes24'}
      />
      <TemplateImage
        onClick={() => {
          setTemplateInfo((prev) => {
            return { ...prev, templateType: 'melon' };
          });
        }}
        src={melon}
        alt="티켓 템플릿 사진"
        focus={templateInfo.templateType === 'melon'}
      />
    </Container>
  );
};

export default TemplateMenu;
