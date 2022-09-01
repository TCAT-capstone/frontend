import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    margin-top: 6.3rem;
    margin-bottom: 4rem;
    width: 18.3rem;
  }
`;

export const TextContainer = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  p {
    font-size: 0.875rem;
    color: ${ColorCode.GRAY1};
  }
`;
