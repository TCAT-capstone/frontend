import React, { useState } from 'react';

import ModalFrame from '@components/Modal/ModalFrame';
import Tab from '@components/Common/Tab';
import { Container } from './style';

interface Props {
  handleSubscribeModalClose: () => void;
}

const SubscribeModal: React.FC<Props> = ({ handleSubscribeModalClose }) => {
  const [isSubscribing, setIsSubscribing] = useState(true);
  return (
    <ModalFrame w={32} h={33.5} handleModalClose={handleSubscribeModalClose}>
      <Container>
        <Tab
          firstText="구독중"
          secondText="구독자"
          firstLink="/"
          secondLink="/"
          focus={isSubscribing ? 'first' : 'second'}
        />
      </Container>
    </ModalFrame>
  );
};

export default SubscribeModal;
