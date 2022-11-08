import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  a {
    display: flex;
    div {
      padding-left: 1.68rem;
      ${media.medium`
        width: 8.7rem;
        padding-left: 0.7rem;
      `}
    }
  }
  b {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0.28rem 0;
    ${media.medium`
      font-size: 1rem;
      line-height: 1rem;
    `}
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
    ${media.medium`
      width: 7rem;
    `}
  }
  button {
    display: block;
    ${media.medium`
      font-size: 0.4rem;
      width: 4.5rem;
    `}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    flex-shrink: 0;
  }
`;
