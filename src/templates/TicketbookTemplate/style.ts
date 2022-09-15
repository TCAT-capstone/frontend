import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const TicketbookListContainer = styled.div``;

export const EditContainer = styled.div`
  margin-left: 7.5rem;
`;

export const TicketbookAddButton = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: ${ColorCode.LIGHT_PURPLE};
  border-radius: 1.125rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  margin: 0.5rem 0;
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
  span {
    padding-left: 0.5rem;
    width: 12rem;
    color: ${ColorCode.PRIMARY};
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
  }
`;
