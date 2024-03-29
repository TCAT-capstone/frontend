import styled from 'styled-components';
import { media } from '@styles/media';

interface ContainerProps {
  initialTicketbookCount: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => (props.initialTicketbookCount <= 3 ? '70rem' : '100rem')};
  .slick-list {
    height: 25rem;
    ${media.large`
      width: 65rem;
    `}
    ${media.small`
      height: 13rem;
      width: 23rem;
      margin: auto;
    `}
  }
  .slick-track {
    display: flex;
    align-items: center;
    margin-top: 3rem;
  }
  .slick-track .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-current {
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    transform: scale(1.15) translateY(-1.2rem);
    transition: 0.8s;
    ${media.small`
      transform: scale(1.15) translateY(-0.5rem);
    `}
  }
`;

export const TicketbookWrapper = styled.div`
  cursor: pointer;
`;
