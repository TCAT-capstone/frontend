import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 35.3rem;
  height: 1.8rem;
  margin: auto;
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;
`;

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 0.2rem;
  padding: 0.55rem 0.7rem;
  width: 10rem;
  background-color: ${ColorCode.PURPLE1};
  border-radius: 1.1rem;
  font-size: 0.6rem;
  line-height: 0.7rem;
`;

export const FilterInput = styled.input`
  ::-webkit-input-placeholder {
    color: black;
  }
  margin-left: 0.5rem;
  width: 5.2rem;
  background-color: ${ColorCode.PURPLE1};
  font-size: 0.5rem;
  color: ${ColorCode.GRAY1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
