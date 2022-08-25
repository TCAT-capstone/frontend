import React from 'react';

import { Container, ProfileInfoContainer, Input, ErrorText, ButtonWrapper, Button } from './style';

interface Props {
  homeId: string;
  newName: string;
  newBio: string;
  nameError: { state: 'error' | 'valid'; message: string };
  bioError: { state: 'error' | 'valid'; message: string };
  isButtonActive: boolean;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateProfile: () => void;
}

const ProfileEditor: React.FC<Props> = ({
  homeId,
  newName,
  newBio,
  nameError,
  bioError,
  isButtonActive,
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
        <Input type="text" onChange={handleNameChange} state={nameError.state} value={newName} />
        <ErrorText>{nameError.message}</ErrorText>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>바이오</h2>
        <Input type="text" onChange={handleBioChange} state={bioError.state} value={newBio} />
        <ErrorText>{bioError.message}</ErrorText>
      </ProfileInfoContainer>
      <ButtonWrapper>
        <Button type="button" onClick={handleUpdateProfile} active={isButtonActive} disabled={!isButtonActive}>
          <span>프로필 저장하기</span>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ProfileEditor;
