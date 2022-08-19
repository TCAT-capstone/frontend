import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

export const ProfileFrame = styled.div`
  display: flex;
  overflow: auto;
  margin: 0 2rem;
  justify-content: center;
  ${media.medium`
  flex-direction: column;
  align-items: center;
`}
`;

export const ProfileWrapper = styled.div`
  width: 18.75rem;
  margin: 5rem 2.2rem 0 0;
`;

export const ProfileEditorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 3.1rem;
  background-color: ${ColorCode.PURPLE1};
  border-radius: 3.75rem;
  transition: 0.3s;
  ${media.large`
    border-radius: 2.8rem;
  `}
  ${media.medium`
    border-radius: 1.5rem;
  `}
`;
