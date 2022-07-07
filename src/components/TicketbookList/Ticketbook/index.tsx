import React from 'react';

import { Container } from './style';

interface Props {
  color: 'PURPLE' | 'GREEN' | 'BLUE' | 'RED';
  title: string;
  date: string;
}

const Ticketbook: React.FC<Props> = ({ color, title, date }) => {
  return (
    <Container color={color}>
      <h3>{title}</h3>
      <span>{date}</span>
      <div />
    </Container>
  );
};

export default Ticketbook;
