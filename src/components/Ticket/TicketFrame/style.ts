import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  display: flex;
  background-color: ${ColorCode.PURPLE1};
  border-radius: 0.5rem;
`;

export const InfoContainer = styled.div`
  margin: 1rem;
  b {
    font-size: 0.65rem;
	font-weight: 600;
  }
`;
