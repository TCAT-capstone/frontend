import styled from 'styled-components';

export const Container = styled.div`
  width: 18.75rem;
  img {
    display: block;
    margin: 0 auto;
  }
  h2 {
    font-size: 1.56rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2.3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9375rem;
    line-height: 1.11rem;
    word-break: keep-all;
    margin-bottom: 0.95rem;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
  span {
    font-size: 0.875rem;
    font-weight: 400;
    padding-left: 0.2rem;
  }
`;
