import React from 'react';

import logoImg from '@images/logo.png';
import googleImg from '@images/google.svg';
import twitterImg from '@images/twitter.svg';

import ModalFrame from '@components/Modal/ModalFrame';
import LoginButton from './LoginButton';
import { Container, Title, Text } from './style';

interface Props {
  handleLoginModalClose: () => void;
}

const LoginModal: React.FC<Props> = ({ handleLoginModalClose }) => {
  const googleLogin = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/oauth2/authorization/google?redirect_uri=${process.env.REACT_APP_OAUTH2_REDIRECT_URI}`;
  };

  return (
    <ModalFrame w={32} h={33.5} handleModalClose={handleLoginModalClose}>
      <Container>
        <img src={logoImg} alt="로고" width={58} />
        <Title>추억을 모아보세요.</Title>
        <LoginButton imgSrc={googleImg} text="구글 계정으로 로그인" handler={googleLogin} />
        <LoginButton imgSrc={twitterImg} text="트위터 계정으로 로그인" handler={() => {}} />
        <Text>&apos;로그인&apos;을 눌러 회원가입 시 티캣북의 약관에 동의하는 것으로 간주합니다.</Text>
      </Container>
    </ModalFrame>
  );
};

export default LoginModal;
