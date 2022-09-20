import styled from 'styled-components';
import { media } from '@styles/media';
import { ColorCode } from '@utils/constants';

export const ProfileWrapper = styled.div`
  width: 23rem;
  margin: 3.1rem auto 2rem auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TicketbookListWrapper = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
`;

export const HomeBackground = styled.div`
  position: absolute;
  top: 60rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${ColorCode.BACKGROUND_PURPLE};
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
