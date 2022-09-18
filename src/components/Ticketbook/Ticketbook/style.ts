import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

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
  background-color: ${ColorCode.LIGHT_PURPLE};
  border-radius: 0.3rem 1rem 1rem 0.3rem;
  cursor: pointer;
  margin: auto;
  h3 {
    position: absolute;
    top: 18%;
    left: 15%;
    font-size: ${(props) => (props.size === 'medium' ? '1.3rem' : '1rem')};
    font-weight: 600;
    color: ${ColorCode.WHITE2};
  }
  span {
    position: absolute;
    bottom: 10%;
    right: 8%;
    font-size: ${(props) => (props.size === 'medium' ? '0.875rem' : '0.7rem')};
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
