import React, { ChangeEvent, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { templateState } from '@stores/editor';
import plusImg from '@images/plus-rounded.svg';
import { TicketTemplateListType } from '@src/types/ticket';
import { AddTemplateButton, Container, TemplateImage } from './style';

interface Props {
  templates: TicketTemplateListType;
  addTemplate: (url: string) => void;
}

const TemplateMenu: React.FC<Props> = ({ templates, addTemplate }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [templateInfo, setTemplateInfo] = useRecoilState(templateState);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const readFile = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFile = async (file: File) => {
    const url = await readFile(file);
    addTemplate(url as string);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <Container>
      {templates.map((t) => (
        <TemplateImage
          key={`template${t.templateId}`}
          onClick={() => {
            setTemplateInfo((prev) => {
              return { ...prev, templateId: t.templateId };
            });
          }}
          src={t.img}
          alt="티켓 템플릿 사진"
          focus={templateInfo.templateId === t.templateId}
        />
      ))}
      <AddTemplateButton type="button" onClick={handleButtonClick}>
        <img src={plusImg} alt="티켓 템플릿 추가하기" />
      </AddTemplateButton>
      <input
        type="file"
        id="fileUpload"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
        accept="image/jpeg, image/jpg, image/png"
      />
    </Container>
  );
};

export default TemplateMenu;
