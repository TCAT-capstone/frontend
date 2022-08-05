import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '@components/Common/Header';
import EditorFrame from '@components/Editor/EditorFrame';
import BasicButton from '@components/Common/BasicButton';
import SideMenu from '@components/Editor/SideMenu';

import sampleImg from '@images/template/interpark.png';
import { Layout, EditorContainer, RightContainer, TextContainer, ImageContainer, ButtonContainer } from './style';

const EditTemplate: React.FC = () => {
  const navigate = useNavigate();

  const handlePageNavigate = () => {
    navigate('/write');
  };

  return (
    <Layout>
      <Header />
      <EditorFrame>
        <EditorContainer>
          <SideMenu />
          <RightContainer>
            <TextContainer>
              <h2>티켓정보를 확인하고 수정하세요.</h2>
              <p>기존의 템플릿을 선택하거나 나만의 템플릿을 만들 수 있어요.</p>
            </TextContainer>
            <ImageContainer>
              <img src={sampleImg} alt="티켓 사진" />
            </ImageContainer>
            <ButtonContainer>
              <Link to={-1 as any}>이전으로</Link>
              <BasicButton text="글 작성하기" handler={handlePageNavigate} />
            </ButtonContainer>
          </RightContainer>
        </EditorContainer>
      </EditorFrame>
    </Layout>
  );
};

export default EditTemplate;
