import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface ContainerProps {
  backgroundImg: string;
  size: 'small' | 'medium';
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => (props.size === 'medium' ? '15rem' : '11.8rem')};
  height: ${(props) => (props.size === 'medium' ? '19rem' : '16.8rem')};
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.3rem 1rem 1rem 0.3rem;
  cursor: pointer;
  margin: auto;
  h3 {
    position: absolute;
    top: 3.5rem;
    left: 2.8rem;
    font-size: ${(props) => (props.size === 'medium' ? '1.3rem' : '1rem')};
    font-weight: 600;
    color: ${ColorCode.WHITE2};
  }
  span {
    position: absolute;
    bottom: 10%;
    right: 1.6rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${ColorCode.WHITE2};
  }
  div {
    position: absolute;
    top: 5%;
    left: 1.3rem;
    width: 1px;
    height: 90%;
    background-color: ${ColorCode.WHITE2};
  }
`;
