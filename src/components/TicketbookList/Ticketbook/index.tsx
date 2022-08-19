import React from 'react';

import { Container } from './style';

interface Props {
  backgroundImg: string;
  title: string;
  date: string;
  color: 'PURPLE' | 'GREEN' | 'BLUE' | 'RED';
}

const Ticketbook: React.FC<Props> = ({ backgroundImg, title, date, color }) => {
  return (
    <Container backgroundImg={backgroundImg} color={color}>
      <h3>{title}</h3>
      <span>{date}</span>
      <div />
    </Container>
  );
};

export default Ticketbook;
