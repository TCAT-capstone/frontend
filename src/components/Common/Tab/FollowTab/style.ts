import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface LinkWrapperProps {
  focus: boolean;
}

interface LineProps {
  focus: 'first' | 'second';
}

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 13.4rem;
  span {
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export const LinkWrapper = styled.div<LinkWrapperProps>`
  width: 50%;
  padding-bottom: 0.7rem;
  transition: 0.3s;
  button {
    display: block;
    width: 4.1rem;
    padding: 0.35rem 0;
    text-align: center;
    background-color: ${(props) => (props.focus ? 'rgba(121, 77, 253, 0.3)' : 'transparent')};
    border-radius: 0.5rem;
    margin: 0 auto;
    transition: 0.3s;
  }
  span {
    color: ${(props) => (props.focus ? ColorCode.BLACK : ColorCode.GRAY1)};
  }
`;

export const Line = styled.div<LineProps>`
  position: absolute;
  left: ${(props) => (props.focus === 'first' ? '0' : '50%')};
  bottom: 0;
  width: 50%;
  height: 2px;
  background-color: rgba(121, 77, 253, 0.3);
  transition: 0.3s;
`;
