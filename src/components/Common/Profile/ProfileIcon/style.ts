import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

interface ImageProps {
  size: number;
}

export const Image = styled.img<ImageProps>`
  width: ${(props) => `${props.size}rem`};
  height: ${(props) => `${props.size}rem`};
  border-radius: 50%;
  background-color: ${ColorCode.GRAY1};
`;
