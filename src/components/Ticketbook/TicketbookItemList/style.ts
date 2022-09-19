import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface TicketbookItemProps {
  focus: boolean;
}

export const TicketbookItem = styled.li<TicketbookItemProps>`
  position: relative;
  width: 20rem;
  height: 4rem;
  background-color: ${ColorCode.LIGHT_PURPLE};
  border-radius: 1.125rem;
  box-sizing: border-box;
  border: solid 2px ${(props) => (props.focus ? ColorCode.PRIMARY : 'transparent')};
  cursor: grab;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 2rem;
  margin: 0.5rem 0;
  span {
    width: 12rem;
    color: ${ColorCode.PRIMARY};
    font-weight: 500;
  }
  button {
    padding: 1rem;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const TicketbookItemImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CheckCircleImg = styled.img`
  position: absolute;
  top: -0.7rem;
  right: -0.5rem;
`;
