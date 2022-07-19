import React, { useState, useEffect } from 'react';

import BasicButton from '@components/Common/BasicButton';

import { Container, ProfileInfoContainer, ButtonWrapper } from './style';

interface Props {
  homeId: string;
  name: string;
  bio: string;
}

const ProfileEditor: React.FC<Props> = ({ homeId, name, bio }) => {
  const [newName, setNewName] = useState(name);
  const [newBio, setNewBio] = useState(bio);

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBio(e.target.value);
  };

  return (
    <Container>
      <ProfileInfoContainer>
        <h1>나의 프로필</h1>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>아이디</h2>
        <text>{homeId}</text>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>닉네임</h2>
        <textarea name="newName" onChange={handleNameChange}>
          {newName}
        </textarea>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>바이오</h2>
        <textarea name="newBio" onChange={handleBioChange}>
          {newBio}
        </textarea>
      </ProfileInfoContainer>
      <ButtonWrapper>
        <BasicButton text="프로필 저장하기" handler={() => console.log({ newName, newBio })} />
      </ButtonWrapper>
    </Container>
  );
};

export default ProfileEditor;
