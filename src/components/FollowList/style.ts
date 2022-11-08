import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.35rem;
  width: 36rem;
  img {
    ${media.small`
      width: 3rem;
      height: 3rem;
  `}
  }
  ${media.small`
    width: 17rem;
    height: 20rem;
  `}
  height: 36.37rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    ${media.medium`
    font-size: 0.4rem;
    font-weight: 600;
    width: 4.3rem;
  `}
  }
`;
