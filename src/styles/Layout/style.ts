import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  margin: 0 auto;
  width: 100rem;
  ${media.large`
    width: 65.2rem;
  `}
  ${media.medium`
    width: 100%;
  `}
`;
