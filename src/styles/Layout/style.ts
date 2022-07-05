import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  margin: 0 auto;
  width: 100rem;
  ${media.large`
    width: 66rem;
  `}
  ${media.medium`
    width: 66rem;
  `}
  ${media.small`
    width: 100%;
  `}
`;
