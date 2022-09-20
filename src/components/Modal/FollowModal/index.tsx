import React, { useState } from 'react';

import ModalFrame from '@components/Modal/ModalFrame';
import FollowTab from '@components/Common/Tab/FollowTab';
import { Container } from './style';

interface Props {
  handleFollowModalClose: () => void;
}

const FollowModal: React.FC<Props> = ({ handleFollowModalClose }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  const handleFirstLink = () => {};
  const handleSecondLink = () => {};

  return (
    <ModalFrame w={32} h={33.5} handleModalClose={handleFollowModalClose}>
      <Container>
        <FollowTab
          firstText="구독중"
          secondText="구독자"
          handleFirstLink={handleFirstLink}
          handleSecondLink={handleSecondLink}
          focus={isFollowing ? 'first' : 'second'}
        />
      </Container>
    </ModalFrame>
  );
};

export default FollowModal;
