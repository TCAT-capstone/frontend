import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Header from '@components/Common/Header';
import EditorFrame from '@components/Editor/EditorFrame';
import BasicButton from '@components/Common/BasicButton';
import Spinner from '@components/Common/Spinner';
import SideMenu from '@components/Editor/SideMenu';
import Loading from '@components/Editor/Loading';

import { templateState, ticketState } from '@stores/editor';
import { getDateTimeString } from '@utils/string';
import { TicketTemplateListType } from '@src/types/ticket';
import {
  Layout,
  EditorContainer,
  RightContainer,
  TextContainer,
  ImageContainer,
  TicketInfoContainer,
  ButtonContainer,
  NextButtonWrapper,
} from './style';

interface Props {
  ticketInfoIsLoaded: boolean;
  templateIsLoaded: boolean;
  handlePageNavigate: () => void;
  templates: TicketTemplateListType;
  addTemplate: (url: string) => void;
}

const EditTemplate: React.FC<Props> = ({
  ticketInfoIsLoaded,
  templateIsLoaded,
  handlePageNavigate,
  templates,
  addTemplate,
}) => {
  const ticketInfo = useRecoilValue(ticketState);
  const templateInfo = useRecoilValue(templateState);

  const currentTemplateImg = () => {
    if (templates.length > 0) return templates.filter((t) => t.templateId === templateInfo.templateId)[0].img;
    return '';
  };

  return (
    <Layout>
      <Header />
      <EditorFrame>
        {ticketInfoIsLoaded ? (
          <Loading />
        ) : (
          <EditorContainer>
            <SideMenu templates={templates} addTemplate={addTemplate} />
            <RightContainer>
              <TextContainer>
                <h2>티켓정보를 확인하고 수정하세요.</h2>
                <p>기존의 템플릿을 선택하거나 나만의 템플릿을 만들 수 있어요.</p>
              </TextContainer>
              <ImageContainer>
                <div id="ticket">
                  <img src={currentTemplateImg()} alt="티켓 사진" />
                  <TicketInfoContainer textColor={templateInfo.textColor}>
                    <h2>{ticketInfo.title}</h2>
                    <p>일시 : {ticketInfo.date ? getDateTimeString(new Date(ticketInfo.date)) : ''}</p>
                    <p>장소 : {ticketInfo.location}</p>
                    <h3>{ticketInfo.seat}</h3>
                  </TicketInfoContainer>
                </div>
              </ImageContainer>
              <ButtonContainer>
                <Link to="/editor/new" replace>
                  이전으로
                </Link>
                <NextButtonWrapper>
                  {templateIsLoaded ? (
                    <Spinner size={1.5} />
                  ) : (
                    <BasicButton text="글 작성하기" handler={handlePageNavigate} />
                  )}
                </NextButtonWrapper>
              </ButtonContainer>
            </RightContainer>
          </EditorContainer>
        )}
      </EditorFrame>
    </Layout>
  );
};

export default EditTemplate;
