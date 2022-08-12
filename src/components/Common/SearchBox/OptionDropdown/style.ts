import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  position: absolute;
  top: 3.9rem;
  right: 0.2rem;
  width: 9rem;
  height: 5.5rem;
  border-radius: 0.7rem;
  padding: 0.9rem 0.5rem;
  background-color: ${ColorCode.WHITE};
  filter: drop-shadow(2px 10px 40px rgba(59, 70, 74, 0.2));
  box-sizing: border-box;
`;

export const OptionList = styled.div``;

export const OptionItem = styled.button`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.85rem;
  text-align: left;
  :hover {
    background-color: rgba(231, 237, 255);
    opacity: 0.8;
  }
`;
