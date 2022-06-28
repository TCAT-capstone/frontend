import React from 'react';

import { Container } from './style';

interface Props {
  text: string;
  handler: () => void;
}

const BasicButton: React.FC<Props> = ({ text, handler }) => {
  return (
    <Container type="button" onClick={handler}>
      {text}
    </Container>
  );
};

export default BasicButton;
