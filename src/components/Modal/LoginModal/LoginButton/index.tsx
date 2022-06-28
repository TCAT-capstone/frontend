import React from 'react';

import { Container, LogoImg } from './style';

interface Props {
  imgSrc: string;
  text: string;
  handler: () => void;
}

const LoginButton: React.FC<Props> = ({ imgSrc, text, handler }) => {
  return (
    <Container type="button" onClick={handler}>
      <LogoImg src={imgSrc} alt="OAuth 로고" />
      {text}
    </Container>
  );
};

export default LoginButton;
