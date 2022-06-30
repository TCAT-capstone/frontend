import React from 'react';

import { Button, LogoImg } from './style';

interface Props {
  imgSrc: string;
  text: string;
  handler: () => void;
}

const LoginButton: React.FC<Props> = ({ imgSrc, text, handler }) => {
  return (
    <Button type="button" onClick={handler}>
      <LogoImg src={imgSrc} alt="OAuth 로고" />
      {text}
    </Button>
  );
};

export default LoginButton;
