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
  padding: 0 2rem;
  margin: 0.5rem 0;
  span {
    width: 12rem;
    color: ${ColorCode.PRIMARY};
    font-weight: 500;
  }
  button {
  }
`;

export const TicketbookItemImg = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: ${ColorCode.GRAY1};
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CheckCircleImg = styled.img`
  position: absolute;
  top: -0.7rem;
  right: -0.5rem;
`;

export const MoreDropdown = styled.div`
  position: absolute;
  top: 1rem;
  right: -3rem;
  background-color: ${ColorCode.WHITE};
  box-shadow: 1px 1px 10px 3px rgba(196, 196, 196, 0.2);
  border-radius: 0.625rem;
  z-index: 20;
  button {
    display: block;
    margin: 0.5rem;
    width: 5rem;
    text-align: left;
    padding-left: 0.3rem;
    :hover {
      background-color: ${ColorCode.LIGHT_PURPLE2};
    }
  }
  span {
    color: ${ColorCode.BLACK};
    font-size: 0.75rem;
  }
`;
