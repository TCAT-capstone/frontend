import styled from 'styled-components';
import { media } from '@styles/media';
import { ColorCode } from '@utils/constants';

interface ContainerProps {
  backgroundColor: 'white' | 'purple';
}

export const Container = styled.div<ContainerProps>`
  width: 30.5rem;
  height: 11.6rem;
  background-color: ${(props) => (props.backgroundColor === 'purple' ? ColorCode.PURPLE1 : ColorCode.WHITE)};
  border-radius: 0.5rem;
  margin: 1.3rem 2.1rem;
  transition: 0.3s;
  a {
    width: 100%;
    height: 100%;
    display: flex;
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
  ${media.large`
    width: 20.94rem;
    height: 17.19rem;
    a {
      flex-direction: column;
    }
  `}
`;

export const TicketImage = styled.img`
  width: 20.5rem;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  flex-shrink: 0;
  ${media.large`
    width: 20.94rem;
    height: 12rem;
  `}
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 7.85rem;
  margin: 1.5rem 1.2rem 1rem 1.2rem;
  flex-shrink: 0;
  h2 {
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 1.14rem;
    letter-spacing: -0.03em;
    word-break: keep-all;
  }
  ${media.large`
    width: 20.94rem;
    margin: 0.93rem;
  `}
`;

export const SubInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  span {
    display: block;
    line-height: 1.3rem;
    color: ${ColorCode.GRAY3};
    font-size: 0.88rem;
    text-align: right;
  }
  ${media.large`
    margin-top: 1rem;
    top: 1rem;
    left: 0;
    div {
      margin-top: 0.5rem;
    }
    span {
      display: inline-block;
      margin-right: 0.3rem;
    }
  `}
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  span {
    margin-right: 0;
    padding-right: 0.2rem;
  }
  ${media.large`
    position: absolute;
    right: 1.7rem;
    top: -0.5rem;
  `}
`;
