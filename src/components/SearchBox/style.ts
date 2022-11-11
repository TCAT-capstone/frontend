import styled from 'styled-components';
import { media } from '@styles/media';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 35rem;
  height: 3.5rem;
  margin: auto;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 0.9rem 1.3rem;
  border-radius: 1.1rem;
  background-color: rgba(248, 249, 255);
  ${media.small`
    width: 20rem;
  `}
`;

export const SearchContent = styled.input`
  ::-webkit-input-placeholder {
    color: black;
  }
  width: 30.5rem;
  background-color: rgba(248, 249, 255);
  margin-left: 0.5rem;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;
