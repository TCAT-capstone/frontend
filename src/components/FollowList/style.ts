import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 36rem;
  height: 35.37rem;
  ${media.small`
    width: 17rem;
    height: 20rem;
  `}
`;
