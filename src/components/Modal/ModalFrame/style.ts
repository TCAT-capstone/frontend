import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

interface ContainerProps {
  w: number;
  h: number;
}

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.25rem);
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => `${props.w}rem`};
  height: ${(props) => `${props.h}rem`};
  background-color: ${ColorCode.WHITE};
  border-radius: 1.8rem;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  ${media.small`
    width: 20rem;
    height: 30rem;
    transform: translate(-55%, -50%);
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  z-index: 30;
`;
