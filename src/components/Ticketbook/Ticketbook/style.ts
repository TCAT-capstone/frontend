import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

interface ContainerProps {
  backgroundImg: string;
  size: 'small' | 'medium';
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => (props.size === 'medium' ? '15rem' : '12rem')};
  height: ${(props) => (props.size === 'medium' ? '19rem' : '15.2rem')};
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${ColorCode.LIGHT_PURPLE3};
  border-radius: 0.3rem 1rem 1rem 0.3rem;
  margin: auto;
  ${media.small`
    width: 6rem;
    height: 7.6rem;
    border-radius: 0.2rem 0.6rem 0.6rem 0.2rem;
  `}
  h3 {
    position: absolute;
    top: 18%;
    left: 15%;
    font-size: ${(props) => (props.size === 'medium' ? '1.3rem' : '1rem')};
    ${media.small`
      font-size: 0.495rem;
    `}
    font-weight: 600;
    color: ${ColorCode.WHITE2};
  }
  span {
    position: absolute;
    bottom: 10%;
    right: 8%;
    font-size: ${(props) => (props.size === 'medium' ? '0.875rem' : '0.7rem')};
    ${media.small`
      font-size: 0.345rem;
      right: 5%
    `}
    font-weight: 600;
    color: ${ColorCode.WHITE2};
  }
  div {
    position: absolute;
    top: 5%;
    left: 7%;
    width: 1px;
    height: 90%;
    background-color: ${ColorCode.WHITE2};
  }
`;
