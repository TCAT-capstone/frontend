import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

export const NumImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  ${media.large`
    width: 100%;
  `}
  z-index: -10;
`;

export const ErrorFrame = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${ColorCode.PRIMARY};
    font-weight: 600;
    font-size: 1.5rem;
  }
  img {
    margin: -3rem 0;
    width: 45rem;
  }
  p {
    margin: 0.3rem 0;
    color: ${ColorCode.GRAY1};
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  button {
    border-width: 0.1rem;
  }
  button: first-child {
    color: ${ColorCode.PRIMARY};
    background-color: white;
    border-color: ${ColorCode.PRIMARY};
    margin-right: 2rem;
  }
`;
