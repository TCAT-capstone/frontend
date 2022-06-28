import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.button`
  background-color: ${ColorCode.PRIMARY};
  color: ${ColorCode.WHITE};
  padding: 0.5rem 1rem;
  border-radius: 16.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
