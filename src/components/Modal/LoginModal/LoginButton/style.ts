import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.6rem;
  height: 2.5rem;
  color: ${ColorCode.BLACK};
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid rgba(133, 133, 133, 0.7);
  border-radius: 16.5rem;
  transition: 0.3s;
  margin-bottom: 0.9rem;

  &:hover {
    color: ${ColorCode.WHITE};
    background-color: ${ColorCode.PRIMARY};
    border: 1px solid transparent;
  }
`;

export const LogoImg = styled.img`
  margin-right: 0.4rem;
`;
