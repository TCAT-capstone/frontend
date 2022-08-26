import React from 'react';
import { useNavigate } from 'react-router-dom';

import BasicButton from '@components/Common/BasicButton';
import pawImg from '@images/error-paw.png';
import numImg from '@images/error-404.png';
import Layout from '@styles/Layout';
import { NumImg, ErrorFrame, ButtonContainer } from './style';

const ErrorTemplate: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    window.location.href = `/`;
  };
  return (
    <Layout>
      <NumImg src={numImg} alt="404 이미지" />
      <ErrorFrame>
        <h2>이런! 무언가 잘못됐어요!</h2>
        <img src={pawImg} alt="발바닥 이미지" />
        <p>페이지가 사라졌거나 잘못된 접근이 이루어진 것 같아요. </p>
        <p>입력하신 페이지의 주소가 올바른지 다시 한 번 확인해 주시겠어요?</p>
        <ButtonContainer>
          <BasicButton text="이전 페이지로" handler={goBack} />
          <BasicButton text="홈으로" handler={goHome} />
        </ButtonContainer>
      </ErrorFrame>
    </Layout>
  );
};

export default ErrorTemplate;
