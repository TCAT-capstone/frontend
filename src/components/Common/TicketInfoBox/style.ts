import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 0.3rem 1rem;
  img {
    padding-top: 0.1rem;
    padding-right: 0.4rem;
  }
  div {
    flex-shrink: 0;
  }
  span {
    font-size: 0.94rem;
    line-height: 1.43rem;
    font-weight: 500;
    flex-shrink: 0;
  }
  ${media.small`
    padding: 0.1rem 1rem;
    span {
      font-size: 0.875rem;
      font-weight: 400;
    }
  `}
`;
