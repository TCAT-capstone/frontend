import React from 'react';

import { Button } from './style';

interface Props {
  text: string;
  handler: (e?: any) => void;
}

const FollowButton: React.FC<Props> = ({ text, handler }) => {
  return (
    <Button type="button" onClick={handler}>
      {text}
    </Button>
  );
};

export default FollowButton;
