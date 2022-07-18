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
  text {
    font-size: 0.8rem;
  }
  textarea {
    outline: none;
    resize: none;
    width: 13rem;
    height: 1rem;
    padding: 0.8rem;
    border: none;
    border: solid 1px;
    border-radius: 0.5rem;
    :focus {
      border-color: ${ColorCode.PURPLE2};
    }
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
  textarea[name='bio'] {
    width: 25.2rem;
    height: 3.3rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 2rem;
  bottom: -5.5rem;
`;
