import React from 'react';
import spinnerImg from '@images/spinner.gif';
import { Container } from './style';

interface Props {
  size: number;
}

const Spinner: React.FC<Props> = ({ size }) => {
  return (
    <Container size={size}>
      <img src={spinnerImg} alt="로딩중" />
    </Container>
  );
};

export default Spinner;
