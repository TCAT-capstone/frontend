import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LinkWrapper, Line } from './style';

interface Props {
  firstText: string;
  secondText: string;
  firstLink: string;
  secondLink: string;
  focus: 'first' | 'second';
}

const Tab: React.FC<Props> = ({ firstText, secondText, firstLink, secondLink, focus }) => {
  return (
    <Container>
      <LinkWrapper focus={focus === 'first'}>
        <Link to={firstLink}>
          <span>{firstText}</span>
        </Link>
      </LinkWrapper>
      <LinkWrapper focus={focus === 'second'}>
        <Link to={secondLink}>
          <span>{secondText}</span>
        </Link>
      </LinkWrapper>
      <Line focus={focus} />
    </Container>
  );
};

export default Tab;
