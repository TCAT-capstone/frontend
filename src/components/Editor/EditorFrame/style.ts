import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  position: relative;
  width: 83rem;
  height: 45rem;
  margin: 2rem auto 0 auto;
  background: ${ColorCode.WHITE};
  box-shadow: 0px 4px 30px rgba(156, 153, 187, 0.6);
  border-radius: 1.875rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
