import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  width: 11.4rem;
  height: 10.5rem;
  border-radius: 0.7rem;
  padding: 1.4rem;
  background-color: ${ColorCode.WHITE};
  filter: drop-shadow(2px 10px 40px rgba(59, 70, 74, 0.2));
  box-sizing: border-box;
  z-index: 10;

  b {
    font-size: 0.875rem;
    font-weight: 600;
  }

  span {
    display: block;
    font-size: 0.75rem;
    line-height: 1em;
    :hover {
      opacity: 0.8;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid ${ColorCode.GRAY2};
  span {
    width: 5.4rem;
  }
`;

export const ProfileLinkContainer = styled.div`
  margin-left: 0.875rem;
  span {
    margin-top: 0.4rem;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 1rem;
  button {
    display: block;
    width: 100%;
  }
  span {
    margin-bottom: 0.625rem;
    text-align: left;
  }
`;
