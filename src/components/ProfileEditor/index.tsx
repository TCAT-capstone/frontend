import React from 'react';

import BasicButton from '@components/Common/BasicButton';

import { Container, ProfileInfoContainer, ButtonWrapper } from './style';

interface Props {
  homeId: string;
  newName: string;
  newBio: string;
  isActive: boolean;
  isPassedSubmit: () => void;
  handleNameChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleUpdateProfile: () => void;
}

const ProfileEditor: React.FC<Props> = ({
  homeId,
  newName,
  newBio,
  isActive,
  isPassedSubmit,
  handleNameChange,
  handleBioChange,
  handleUpdateProfile,
}) => {
  return (
    <Container>
      <ProfileInfoContainer>
        <h1>나의 프로필</h1>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>아이디</h2>
        <span>{homeId}</span>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>닉네임</h2>
        <textarea name="newName" value={newName} onChange={handleNameChange} onKeyUp={isPassedSubmit} />
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>바이오</h2>
        <textarea name="newBio" value={newBio} onChange={handleBioChange} onKeyUp={isPassedSubmit} />
      </ProfileInfoContainer>
      <ButtonWrapper isActive={isActive}>
        <BasicButton text="프로필 저장하기" handler={handleUpdateProfile} />
      </ButtonWrapper>
    </Container>
  );
};

export default ProfileEditor;
