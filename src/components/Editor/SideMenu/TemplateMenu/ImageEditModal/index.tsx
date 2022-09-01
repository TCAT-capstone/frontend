import React, { useState, useRef, useEffect, MouseEvent, WheelEvent } from 'react';
import html2canvas from 'html2canvas';

import Slider from '@mui/material/Slider';
import ModalFrame from '@components/Modal/ModalFrame';
import BasicButton from '@components/Common/BasicButton';
import {
  Container,
  DragContainer,
  NewTemplate,
  ImageContainer,
  BackgroundImage,
  TemplateFrame,
  BottomContainer,
  SliderWrapper,
} from './style';

interface Props {
  handleModalClose: () => void;
  templateImageUrl: string;
  addTemplate: (url: string) => void;
}

const WIDTH_SIZE = 672;

const ImageEditModal: React.FC<Props> = ({ handleModalClose, templateImageUrl, addTemplate }) => {
  const [scale, setScale] = useState(1);
  const [downActive, setDownActive] = useState(false);
  const [imageOrigin, setImageOrigin] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [diff, setDiff] = useState({ x: 0, y: 0 });
  const [height, setHeight] = useState(WIDTH_SIZE);
  const imgRef = useRef<HTMLImageElement>(null);

  const getHeight = () => {
    if (imgRef.current) return (imgRef.current.naturalHeight / imgRef.current.naturalWidth) * WIDTH_SIZE;
    return WIDTH_SIZE;
  };

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

  const getTemplateImage = async () => {
    const node = document.getElementById('template');
    if (node) {
      const canvas = await html2canvas(node, { scale: 2 });
      const imgUrl = canvas.toDataURL();
      return imgUrl;
    }
    return null;
  };

  const handleImageEdit = async () => {
    const imgUrl = await getTemplateImage();
    if (imgUrl) {
      addTemplate(imgUrl);
    }
    handleModalClose();
  };

  useEffect(() => {
    setHeight(getHeight());
  }, []);

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
          <NewTemplate id="template">
            <ImageContainer
              style={{
                width: `${WIDTH_SIZE * scale}px`,
                height: `${height * scale}px`,
                transform: `translate3d(${diff.x}px, ${diff.y}px, 0px)`,
              }}
            >
              <BackgroundImage templateImageUrl={templateImageUrl} />
              <img src={templateImageUrl} alt="원본 사진" style={{ display: 'none' }} ref={imgRef} />
            </ImageContainer>
          </NewTemplate>
          <TemplateFrame />
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
          <BasicButton text="완료하기" handler={handleImageEdit} />
        </BottomContainer>
      </Container>
    </ModalFrame>
  );
};

export default ImageEditModal;
