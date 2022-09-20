import React from 'react';

import { Container, LinkWrapper, Line } from './style';

interface Props {
  firstText: string;
  secondText: string;
  handleFirstLink: () => void;
  handleSecondLink: () => void;
  focus: 'first' | 'second';
}

const SubscribeTab: React.FC<Props> = ({ firstText, secondText, handleFirstLink, handleSecondLink, focus }) => {
  return (
    <Container>
      <LinkWrapper focus={focus === 'first'}>
        <button type="button" onClick={handleFirstLink}>
          <span>{firstText}</span>
        </button>
      </LinkWrapper>
      <LinkWrapper focus={focus === 'second'}>
        <button type="button" onClick={handleSecondLink}>
          <span>{secondText}</span>
        </button>
      </LinkWrapper>
      <Line focus={focus} />
    </Container>
  );
};

export default SubscribeTab;
