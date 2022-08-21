import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
  margin: 4rem 0;
  .slick-list {
    height: 25rem;
  }
  .slick-dots {
    bottom: -3rem;
  }
  .slick-track {
    padding-top: 5.3rem;
    position: absolute;
    bottom: -16rem;
  }
  .slick-center {
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    transform: scale(1.15);
    transition: 0.8s;
  }
`;
