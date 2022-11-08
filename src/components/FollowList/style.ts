import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.35rem;
  width: 36rem;
  ${media.small`
    width: 17rem;
    height: 20rem;
  `}
  height: 36.37rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
