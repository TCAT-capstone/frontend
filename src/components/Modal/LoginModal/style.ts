import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.6rem;
`;

export const Title = styled.h2`
  display: block;
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 2.68rem;
`;

export const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${ColorCode.GRAY1};
  margin-top: 13rem;
`;
