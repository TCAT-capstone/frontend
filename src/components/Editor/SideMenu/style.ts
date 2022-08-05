import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface TabItemWrapperProps {
  focus: boolean;
}

interface LineProps {
  currMenu: 'ticketInfo' | 'template' | 'text';
}

export const Container = styled.div`
  width: 22.3rem;
  height: 35.8rem;
  background-color: ${ColorCode.LIGHT_PURPLE};
  border-radius: 0.875rem;
`;

export const TabContainer = styled.div`
  position: relative;
  display: flex;
  width: 18.1rem;
  margin: 1.875rem auto 0 auto;
  span {
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export const TabItemWrapper = styled.div<TabItemWrapperProps>`
  width: 33.33%;
  padding-bottom: 0.7rem;
  transition: 0.3s;
  span {
    display: block;
    width: 4.1rem;
    padding: 0.35rem 0.5rem;
    text-align: center;
    background-color: ${(props) => (props.focus ? 'rgba(121, 77, 253, 0.3)' : 'transparent')};
    border-radius: 0.5rem;
    margin: 0 auto;
    color: ${(props) => (props.focus ? ColorCode.BLACK : ColorCode.GRAY1)};
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const Line = styled.div<LineProps>`
  position: absolute;
  left: ${(props) => {
    if (props.currMenu === 'ticketInfo') return '0';
    if (props.currMenu === 'template') return '33.333%';
    return '66.666%';
  }};
  bottom: 0;
  width: 33.333%;
  height: 2px;
  background-color: rgba(121, 77, 253, 0.3);
  transition: 0.3s;
`;
