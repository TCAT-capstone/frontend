import React, { DragEvent, MouseEvent, UIEvent, useState, WheelEvent } from 'react';
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
  const [scale, setScale] = useState(1);
  const [downActive, setDownActive] = useState(false);
  const [imageOrigin, setImageOrigin] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [diff, setDiff] = useState({ x: 0, y: 0 });

  const handleChange = (event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setDownActive(true);
    setOrigin({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: MouseEvent) => {
    setDownActive(false);
    setImageOrigin({ x: diff.x, y: diff.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (downActive) {
      const diffX = e.clientX - origin.x;
      const diffY = e.clientY - origin.y;
      setDiff({ x: imageOrigin.x + diffX, y: imageOrigin.y + diffY });
    }
  };

  const handleWheel = (e: WheelEvent) => {
    setScale((prev) => {
      if (prev + -e.deltaY * 0.001 >= 1 && prev + -e.deltaY * 0.001 <= 5) return prev + -e.deltaY * 0.001;
      return prev;
    });
  };

  return (
    <ModalFrame w={45} h={35} handleModalClose={handleModalClose}>
      <Container>
        <h2>이미지 편집</h2>
        <DragContainer
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          <ImageContainer
            style={{
              width: `${672 * scale}px`,
              transform: `translate3d(${diff.x}px, ${diff.y}px, 0px)`,
            }}
          >
            <BackgroundImage templateImageUrl={templateImageUrl} />
            <img src={templateImageUrl} alt="사진" style={{ display: 'none' }} />
          </ImageContainer>
          <TicketFrame />
        </DragContainer>
        <BottomContainer>
          <SliderWrapper>
            <Slider
              value={scale}
              onChange={handleChange}
              aria-label="Default"
              style={{ color: '#794DFD' }}
              min={1}
              max={5}
              step={0.1}
            />
          </SliderWrapper>
          <BasicButton text="완료하기" handler={() => {}} />
        </BottomContainer>
      </Container>
    </ModalFrame>
  );
};

export default ImageEditModal;
