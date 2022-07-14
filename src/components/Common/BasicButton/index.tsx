import React from 'react';

import { Button } from './style';

interface Props {
  text: string;
  type: 'submit' | 'reset' | 'button';
  handler: () => void;
}

const BasicButton: React.FC<Props> = ({ type, text, handler }) => {
  return (
    <Button type={type} onClick={handler}>
      {text}
    </Button>
  );
};

export default BasicButton;
