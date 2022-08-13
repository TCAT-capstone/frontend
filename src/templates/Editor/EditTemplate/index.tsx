import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import domtoimage from 'dom-to-image';

import Header from '@components/Common/Header';
import EditorFrame from '@components/Editor/EditorFrame';
import BasicButton from '@components/Common/BasicButton';
import SideMenu from '@components/Editor/SideMenu';

import interpark from '@images/template/interpark.png';
import yes24 from '@images/template/yes24.png';
import melon from '@images/template/melon.png';

import { templateState, ticketState } from '@stores/editor';
import { getDateTimeString } from '@utils/string';
import {
  Layout,
  LoadingContainer,
  EditorContainer,
  RightContainer,
  TextContainer,
  ImageContainer,
  TicketInfoContainer,
  ButtonContainer,
} from './style';

interface Props {
  isLoading: boolean;
}

const EditTemplate: React.FC<Props> = ({ isLoading }) => {
  const navigate = useNavigate();
  const ticketInfo = useRecoilValue(ticketState);
  const templateInfo = useRecoilValue(templateState);

  const handlePageNavigate = async () => {
    const imgUrl = await getTicketImage();
    navigate('/write', { state: { imgUrl }, replace: true });
  };

  const getTicketImage = async () => {
    const node = document.getElementById('ticket');
    if (node) {
      const imgUrl = await domtoimage.toPng(node);
      return imgUrl;
    }
    return '';
  };

  return (
    <Layout>
      <Header />
      <EditorFrame>
        {isLoading ? (
          <LoadingContainer>
            <TextContainer>
              <h2>티켓 정보를 가져오는 중이에요.</h2>
              <p>잠시만 기다려주세요.</p>
            </TextContainer>
          </LoadingContainer>
        ) : (
          <EditorContainer>
            <SideMenu />
            <RightContainer>
              <TextContainer>
                <h2>티켓정보를 확인하고 수정하세요.</h2>
                <p>기존의 템플릿을 선택하거나 나만의 템플릿을 만들 수 있어요.</p>
              </TextContainer>
              <ImageContainer>
                <div id="ticket">
                  {templateInfo.templateType === 'interpark' && <img src={interpark} alt="티켓 사진" />}
                  {templateInfo.templateType === 'yes24' && <img src={yes24} alt="티켓 사진" />}
                  {templateInfo.templateType === 'melon' && <img src={melon} alt="티켓 사진" />}
                  <TicketInfoContainer>
                    <h2>{ticketInfo.title}</h2>
                    <p>일시 : {ticketInfo.date ? getDateTimeString(new Date(ticketInfo.date)) : ''}</p>
                    <p>장소 : {ticketInfo.location}</p>
                    <h3>{ticketInfo.seat}</h3>
                  </TicketInfoContainer>
                </div>
              </ImageContainer>
              <ButtonContainer>
                <Link to="/editor/new">이전으로</Link>
                <BasicButton text="글 작성하기" handler={handlePageNavigate} />
              </ButtonContainer>
            </RightContainer>
          </EditorContainer>
        )}
      </EditorFrame>
    </Layout>
  );
};

export default EditTemplate;
