import React from 'react';
import loadingCatImg from '@images/loading-cat.png';
import { Container, TextContainer } from './style';

const Loading: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h2>티켓 정보를 가져오는 중이에요.</h2>
        <p>잠시만 기다려주세요.</p>
      </TextContainer>
      <img src={loadingCatImg} alt="로딩 사진" />
    </Container>
  );
};

export default Loading;
