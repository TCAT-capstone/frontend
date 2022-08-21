import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
  .slick-list {
    height: 25rem;
  }
  .slick-track {
    display: flex;
    position: absolute;
    bottom: 0rem;
  }
  .slick-track .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-center {
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    transform: scale(1.15) translateY(-1.2rem);
    transition: 0.8s;
  }
`;
