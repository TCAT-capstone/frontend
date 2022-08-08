import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Layout = styled.div`
  margin: 0 auto;
  width: 100rem;
`;

export const EditorContainer = styled.div`
  padding: 3.8rem 8.5rem;
  display: flex;
`;

export const RightContainer = styled.div`
  margin-left: 3.1rem;
`;

export const TextContainer = styled.div`
  margin-bottom: 3.5rem;
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  p {
    font-size: 0.875rem;
    color: ${ColorCode.GRAY1};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    width: 40.5rem;
  }
`;

export const TicketInfoContainer = styled.div`
  position: absolute;
  top: 5.5rem;
  left: 3rem;
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    padding-top: 0.6rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 3.5rem;
  a,
  a:visited {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${ColorCode.PURPLE2};
    margin-right: 4rem;
  }
`;
