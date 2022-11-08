import styled from 'styled-components';
import { media } from '@styles/media';
import { ColorCode } from '@utils/constants';

export const PostContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 49rem;
  @media (max-width: 49rem) {
    width: 95%;
  }
  ${media.large`
    margin-top: 3.6rem;
  `}
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
  ${media.large`
    margin-left: 1rem;
    margin-bottom: 10.875rem;
  `}
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
  ${media.large`
    position: absolute;
    top: -3rem;
    left: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  `}
`;

export const TicketContainer = styled.div`
  position: relative;
  width: 65%;
  margin: 0 auto 3rem auto;
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

export const TicketInfoWrapper = styled.div`
  width: 15rem;
  position: absolute;
  right: -19rem;
  ${media.large`
    left: 0;
    top: 4.5rem;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.9rem;
  margin-bottom: 5rem;
  font-size: 0.875rem;
  color: ${ColorCode.GRAY1};
  button {
    font-size: 0.875rem;
    color: ${ColorCode.GRAY1};
    &:hover {
      opacity: 0.8;
    }
  }
  ${media.large`
    margin-left: 1rem;
  `}
`;

export const ShareLikeContainer = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    position: absolute;
    left: 1.4rem;
    font-size: 0.875rem;
    color: ${ColorCode.GRAY3};
  }
`;

export const MediumProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    div {
      padding-left: 1.68rem;
    }
  }
  b {
    display: block;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin: 0.2rem 0;
  }
  span {
    display: block;
    font-size: 0.94rem;
    line-height: 1.125rem;
  }
  button {
    display: block;
  }
  ${media.large`
    flex-direction: column;
    align-items: center;
    a {
      flex-direction: column;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 1rem 0;
      }
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    flex-shrink: 0;
  }
`;

export const TicketsContainer = styled.div`
  height: 25rem;
`;

export const PostBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 31rem;
  background: rgba(121, 77, 253, 0.07);
  border-top: 1px solid rgba(20, 0, 142, 0.7);
  z-index: -10;
  ${media.large`
    height: 38rem;
  `}
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
