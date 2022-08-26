import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import ProfileTemplate from '@templates/ProfileTemplate';

import { userProfileState } from '@stores/user';
import { updateMyProfile } from '@src/apis/member';

type ErrorType = { state: 'error' | 'valid'; message: string };

const ProfilePage: React.FC = () => {
  const [myProfile, setMyProfile] = useRecoilState(userProfileState);
  const [newName, setNewName] = useState(myProfile.name);
  const [newBio, setNewBio] = useState(myProfile.bio === null ? '' : myProfile.bio);
  const [nameError, setNameError] = useState<ErrorType>({ state: 'error', message: '' });
  const [bioError, setBioError] = useState<ErrorType>({ state: 'error', message: '' });

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleUpdateProfile = async () => {
    const newProfile = await updateMyProfile({ name: newName, bio: newBio });
    if (newProfile) {
      setMyProfile((prev) => {
        return { ...prev, name: newProfile.name, bio: newProfile.bio };
      });
    }
  };

  useEffect(() => {
    if (
      (newName !== myProfile?.name || newBio !== myProfile?.bio) &&
      nameError.state === 'valid' &&
      bioError.state === 'valid'
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [nameError, bioError]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBio(e.target.value);
  };

  useEffect(() => {
    validateName();
  }, [newName]);

  useEffect(() => {
    validateBio();
  }, [newBio]);

  const validateName = () => {
    if (newName.length > 12 || newName.length < 1) {
      setNameError({ state: 'error', message: '닉네임은 1자 이상, 12자 이내 이어야 해요.' });
    } else {
      setNameError({ state: 'valid', message: '' });
    }
  };

  const validateBio = () => {
    if (newBio && (newBio.length > 30 || newBio.length < 1)) {
      setBioError({ state: 'error', message: '바이오는 1자 이상, 30자 이내 이어야 해요.' });
    } else {
      setBioError({ state: 'valid', message: '' });
    }
  };

  return (
    <ProfileTemplate
      profile={myProfile}
      newName={newName}
      newBio={newBio}
      nameError={nameError}
      bioError={bioError}
      isButtonActive={isButtonActive}
      handleNameChange={handleNameChange}
      handleBioChange={handleBioChange}
      handleUpdateProfile={handleUpdateProfile}
    />
  );
};

export default ProfilePage;
