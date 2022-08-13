import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userProfileState } from '@stores/user';
import xImg from '@images/x.svg';

import { Container, CloseButton } from './style';

interface Props {
  children: React.ReactNode;
}

const EditorFrame: React.FC<Props> = ({ children }) => {
  const myProfile = useRecoilValue(userProfileState);
  const navigate = useNavigate();

  const handlePageNavigate = () => {
    navigate(`/~${myProfile.homeId}`);
  };

  return (
    <Container>
      <CloseButton onClick={handlePageNavigate}>
        <img src={xImg} alt="닫기" />
      </CloseButton>
      {children}
    </Container>
  );
};

export default EditorFrame;
