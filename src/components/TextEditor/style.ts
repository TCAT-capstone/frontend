import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TicketContainer = styled.div`
  position: absolute;
  top: 14.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
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
