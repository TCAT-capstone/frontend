import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface BackgroundImageProps {
  templateImageUrl: string;
}

export const Container = styled.div`
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1.5rem;
  }
`;

export const DragContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 26rem;
  padding: 0 1.5rem;
  box-sizing: border-box;
  cursor: move;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.5rem;
  right: 0;
`;

export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: ${(props) => `url(${props.templateImageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TicketFrame = styled.div`
  width: 672px;
  height: 23.9rem;
  border: solid 4px ${ColorCode.PRIMARY};
  box-shadow: rgb(20 29 38 / 70%) 0px 0px 0px 9999px;
  box-sizing: border-box;
  z-index: 5;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1.5rem;
  box-sizing: border-box;
`;

export const SliderWrapper = styled.div`
  width: 60%;
`;
