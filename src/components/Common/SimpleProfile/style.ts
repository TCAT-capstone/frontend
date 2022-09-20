import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  a {
    display: flex;
    div {
      padding-left: 1.68rem;
    }
  }
  b {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0.28rem 0;
  }
  span {
    display: block;
    width: 23.12rem;
    font-size: 0.94rem;
    font-weight: 400;
    line-height: 1.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  button {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    flex-shrink: 0;
  }
`;
