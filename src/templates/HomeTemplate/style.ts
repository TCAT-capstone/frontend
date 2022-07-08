import styled from 'styled-components';
import { BookColorCode } from '@utils/constants';
import { media } from '@styles/media';

interface TicketBackgroundProps {
  color: 'PURPLE' | 'GREEN' | 'BLUE' | 'RED';
}

export const ProfileWrapper = styled.div`
  width: 18.75rem;
  margin: 3.1rem auto 2rem auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TicketbookListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  margin-bottom: 13rem;
`;

export const TicketBackground = styled.div<TicketBackgroundProps>`
  position: absolute;
  top: 59rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => BookColorCode[props.color].background};
  z-index: -10;
  border-radius: 3.75rem 3.75rem 0 0;
  transition: 0.3s;
  ${media.large`
    border-radius: 2.8rem 2.8rem 0 0;
  `}
  ${media.medium`
    border-radius: 1.5rem 1.5rem 0 0;
  `}
`;
