import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 49rem;
  @media (max-width: 49rem) {
    width: 100%;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TicketImage = styled.img`
  position: absolute;
  top: 18rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 17.1rem;
`;
