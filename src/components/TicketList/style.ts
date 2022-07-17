import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2.1rem;
  margin-right: -2.1rem;

  ${media.medium`
    justify-content: center;
  `}
`;
