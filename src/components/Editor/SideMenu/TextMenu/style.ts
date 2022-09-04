import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface ColorBoxProps {
  color: 'black' | 'white';
  focus: boolean;
}

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const ColorBox = styled.button<ColorBoxProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  background-color: ${(props) => (props.color === 'black' ? ColorCode.BLACK : ColorCode.WHITE)};
  border: solid 2px ${(props) => (props.focus ? ColorCode.PRIMARY : 'transparent')};
`;
