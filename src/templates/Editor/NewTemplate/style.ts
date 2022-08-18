import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Layout = styled.div`
  margin: 0 auto;
  width: 100rem;
`;

export const TextContainer = styled.div`
  text-align: center;
  padding-top: 7.2rem;
  padding-bottom: 3.25rem;
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

export const LinkWrapper = styled.div`
  width: 6rem;
  text-align: center;
  margin: 2.5rem auto 0 auto;
  a,
  a:visited {
    color: ${ColorCode.PURPLE2};
    font-size: 0.875rem;
    font-weight: 600;
    :hover {
      opacity: 0.8;
    }
  }
`;
