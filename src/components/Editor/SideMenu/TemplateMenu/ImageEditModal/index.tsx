import React from 'react';
import Slider from '@mui/material/Slider';
import ModalFrame from '@components/Modal/ModalFrame';
import BasicButton from '@components/Common/BasicButton';
import {
  Container,
  DragContainer,
  ImageContainer,
  BackgroundImage,
  TicketFrame,
  BottomContainer,
  SliderWrapper,
} from './style';

interface Props {
  handleModalClose: () => void;
  templateImageUrl: string;
}

const ImageEditModal: React.FC<Props> = ({ handleModalClose, templateImageUrl }) => {
  return (
    <ModalFrame w={45} h={35} handleModalClose={handleModalClose}>
      <Container>
        <h2>이미지 편집</h2>
        <DragContainer>
          <ImageContainer style={{}}>
            <BackgroundImage templateImageUrl={templateImageUrl} />
            <img src={templateImageUrl} alt="사진" style={{ display: 'none' }} />
          </ImageContainer>
          <TicketFrame />
        </DragContainer>
        <BottomContainer>
          <SliderWrapper>
            <Slider defaultValue={50} aria-label="Default" style={{ color: '#794DFD' }} />
          </SliderWrapper>
          <BasicButton text="완료하기" handler={() => {}} />
        </BottomContainer>
      </Container>
    </ModalFrame>
  );
};

export default ImageEditModal;
