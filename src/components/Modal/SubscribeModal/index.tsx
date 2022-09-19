import React from 'react';

import ModalFrame from '@components/Modal/ModalFrame';
import { Container } from './style';

interface Props {
  handleSubscribeModalClose: () => void;
}

const SubscribeModal: React.FC<Props> = ({ handleSubscribeModalClose }) => {
  return (
    <ModalFrame w={32} h={33.5} handleModalClose={handleSubscribeModalClose}>
      <Container />
    </ModalFrame>
  );
};

export default SubscribeModal;
