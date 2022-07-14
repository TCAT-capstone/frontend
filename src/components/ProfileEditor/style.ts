import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.form`
  position: relative;
  width: 30.054rem;
  margin: 2rem 2rem 8rem 2rem;
  h1 {
    font-size: 1.56rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.9375rem;
    line-height: 1.11rem;
    word-break: keep-all;
    margin-bottom: 0.95rem;
  }
  input {
    outline: none;
    width: 13rem;
    height: 2rem;
    border: none;
    border: solid 1px;
    border-radius: 0.5rem;
    :focus {
      border: solid 1.8px;
      color: ${ColorCode.PURPLE2};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;
