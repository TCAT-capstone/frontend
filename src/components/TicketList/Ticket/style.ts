import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface ContainerProps {
  backgroundColor: 'white' | 'purple';
}

export const Container = styled.div<ContainerProps>`
  width: 30.5rem;
  height: 11.65rem;
  background-color: ${(props) => (props.backgroundColor === 'purple' ? ColorCode.PURPLE1 : ColorCode.WHITE)};
  border-radius: 0.5rem;
  margin: 1.3rem 2.1rem;
  transition: 0.3s;
  a {
    display: flex;
    flex-shrink: 0;
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const TicketImage = styled.img`
  width: 20.25rem;
  height: 11.65rem;
  border-radius: 0.5rem;
  background-color: ${ColorCode.GRAY2};
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 7.85rem;
  margin: 1.5rem 1.2rem 1rem 1.2rem;
  h2 {
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 1.14rem;
    letter-spacing: -0.03em;
    word-break: keep-all;
  }
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
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  span {
    padding-right: 0.2rem;
  }
`;
