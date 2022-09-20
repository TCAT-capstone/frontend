import React, { useState } from 'react';

import ModalFrame from '@components/Modal/ModalFrame';
import SubscribeTab from '@components/Common/Tab/SubscribeTab';
import { Container } from './style';

interface Props {
  handleSubscribeModalClose: () => void;
}

const SubscribeModal: React.FC<Props> = ({ handleSubscribeModalClose }) => {
  const [isSubscribing, setIsSubscribing] = useState(true);

  const handleFirstLink = () => {};
  const handleSecondLink = () => {};

  return (
    <ModalFrame w={32} h={33.5} handleModalClose={handleSubscribeModalClose}>
      <Container>
        <SubscribeTab
          firstText="구독중"
          secondText="구독자"
          handleFirstLink={handleFirstLink}
          handleSecondLink={handleSecondLink}
          focus={isSubscribing ? 'first' : 'second'}
        />
      </Container>
    </ModalFrame>
  );
};

export default SubscribeModal;
