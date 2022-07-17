import styled from 'styled-components';
import { BookColorCode } from '@utils/constants';

interface ContainerProps {
  color: 'PURPLE' | 'GREEN' | 'BLUE' | 'RED';
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 15rem;
  height: 19rem;
  background-color: ${(props) => BookColorCode[props.color].background};
  border-radius: 0.3rem 1rem 1rem 0.3rem;
  margin: 0 1rem;
  flex-shrink: 0;
  cursor: pointer;
  h3 {
    position: absolute;
    top: 3.5rem;
    left: 2.8rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(props) => BookColorCode[props.color].font};
  }
  span {
    position: absolute;
    bottom: 2.6rem;
    right: 1.6rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => BookColorCode[props.color].line};
  }
  div {
    position: absolute;
    left: 1.3rem;
    width: 1px;
    height: 17rem;
    margin: 1rem 0;
    background-color: ${(props) => BookColorCode[props.color].line};
  }
`;
