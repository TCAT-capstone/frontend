import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface InputProps {
  state: 'none' | 'error' | 'valid';
}

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > img {
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
  }
  p {
    font-size: 1.125rem;
    padding-top: 1rem;
  }
  b {
    display: block;
    font-size: 0.875rem;
    font-weight: 800;
    padding: 2.5rem 0 0.8rem 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input<InputProps>`
  width: 15rem;
  height: 2.5rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 2rem;
  transition: 0.3s;
  box-sizing: border-box;
  border: 2px solid
    ${(props) => {
      if (props.state === 'none') return ColorCode.GRAY1;
      if (props.state === 'error') return ColorCode.RED;
      return ColorCode.GREEN;
    }};
`;

export const ErrorText = styled.span`
  position: absolute;
  left: 0;
  top: 3rem;
  color: ${ColorCode.RED};
  font-size: 0.625rem;
  letter-spacing: -0.03em;
`;

export const InputIcon = styled.img`
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
`;

export const ButtonWrapper = styled.div`
  padding-top: 4.5rem;
  text-align: right;
`;

export const Button = styled.button<ButtonProps>`
  width: 5rem;
  height: 2.5rem;
  color: ${ColorCode.WHITE};
  background-color: ${(props) => (props.active ? ColorCode.PRIMARY : ColorCode.GRAY4)};
  border-radius: 100px;
`;
