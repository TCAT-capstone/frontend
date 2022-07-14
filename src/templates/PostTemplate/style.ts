import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const PostContainer = styled.div`
  margin: 0 auto;
  width: 49rem;
  @media (max-width: 49rem) {
    width: 95%;
  }
`;

export const SmallProfileContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  div {
    padding-left: 0.875rem;
  }
  b {
    display: block;
    height: 1.18rem;
    line-height: 1.18rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.03em;
    margin: 0.2rem 0;
  }
  span {
    display: block;
    height: 0.875rem;
    line-height: 0.875rem;
    font-size: 1rem;
    font-size: 0.75rem;
    color: ${ColorCode.GRAY1};
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -0.02em;
`;

export const TicketContainer = styled.div`
  position: relative;
  width: 65%;
  margin: 3rem auto;
  @media (max-width: 49rem) {
    width: 90%;
  }
`;

export const TicketImage = styled.img`
  display: block;
  width: 100%;
`;

export const CheckMarkWrapper = styled.div`
  position: absolute;
  top: -0.8rem;
  left: -0.8rem;
`;
