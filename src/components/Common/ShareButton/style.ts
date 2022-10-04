import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  position: relative;
`;

export const ShareContainer = styled.div`
  position: absolute;
  top: -2.8rem;
  left: -0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ColorCode.WHITE};
  box-shadow: 1px 1px 10px 3px rgba(196, 196, 196, 0.2);
  border-radius: 10px;
  width: 5rem;
  height: 2.2rem;
  box-sizing: border-box;
  z-index: 5;
  button {
    padding: 0.5rem;
  }
`;
