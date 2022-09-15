import React from 'react';

import { Container } from './style';

interface Props {
  backgroundImg: string;
  name: string;
  description: string;
  size: 'small' | 'medium';
}

const Ticketbook: React.FC<Props> = ({ backgroundImg, name, description, size }) => {
  return (
    <Container backgroundImg={backgroundImg} size={size}>
      <h3>{name}</h3>
      <span>{description}</span>
      <div />
    </Container>
  );
};

export default Ticketbook;
