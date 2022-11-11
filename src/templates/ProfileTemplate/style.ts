import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

export const ProfileFrame = styled.div`
  display: flex;
  overflow: auto;
  margin: 0 2rem;
  justify-content: center;
  ${media.small`
    flex-direction: column;
    align-items: center;
    width: 20rem;
    margin: 0;
  `}
  ${media.medium`
    flex-direction: column;
    align-items: center;
    margin: auto;
  `}
`;

export const ProfileWrapper = styled.div`
  width: 23rem;
  margin: 5rem 2.2rem 0 0;
  ${media.small`
    width: 18rem;
    margin: auto;
    :nth-of-type(1) > div {
      width: 18rem;
    }
  `}
`;

export const ProfileEditorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 3.1rem 0;
  background-color: ${ColorCode.PURPLE1};
  border-radius: 3.75rem;
  transition: 0.3s;
  ${media.small`
    width: 20rem;
    border-radius: 2.8rem;
    margin: 3.1rem 0;
  `}
  ${media.medium`
    border-radius: 1.5rem;
  `}
`;
