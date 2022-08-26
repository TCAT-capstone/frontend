import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface InputProps {
  state: 'none' | 'error' | 'valid';
}

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 30.054rem;
  margin: 2rem 2rem 8rem 2rem;
  h1 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.9375rem;
    line-height: 1.11rem;
    word-break: keep-all;
    margin-bottom: 0.95rem;
  }
  span {
    font-size: 0.8rem;
  }
`;

export const ProfileInfoContainer = styled.div`
  position: relative;
  width: 7.85rem;
  margin: 1.5rem 1.2rem 2rem 1.2rem;
  h2 {
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 0.3rem;
    letter-spacing: -0.03em;
    word-break: keep-all;
  }
  :nth-of-type(4) > Input {
    width: 25.8rem;
    height: 3.3rem;
  }
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
      if (props.state === 'error') return ColorCode.RED;
      return ColorCode.GRAY1;
    }};
  :focus {
    border-color: ${ColorCode.PURPLE2};
  }
`;

export const ErrorText = styled.span`
  color: ${ColorCode.RED};
  font-size: 0.625rem;
  letter-spacing: -0.03em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 2rem;
  bottom: -5.5rem;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.active ? ColorCode.PRIMARY : ColorCode.GRAY4)};
  color: ${ColorCode.WHITE};
  padding: 0.5rem 1rem;
  border-radius: 16.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
