import React from 'react';

import xImg from '@images/x.svg';

import ModalPortal from '@components/Modal/ModalPortal';

import { Background, Container, ContentContainer, CloseButton } from './style';

interface Props {
  children: React.ReactNode;
  w: number;
  h: number;
  handleModalClose: () => void;
}

const ModalFrame: React.FC<Props> = ({ children, w, h, handleModalClose }) => {
  return (
    <ModalPortal>
      <Background onClick={handleModalClose} />
      <Container>
        <ContentContainer w={w} h={h}>
          <CloseButton onClick={handleModalClose}>
            <img src={xImg} alt="닫기" />
          </CloseButton>
          {children}
        </ContentContainer>
      </Container>
    </ModalPortal>
  );
};

export default ModalFrame;
