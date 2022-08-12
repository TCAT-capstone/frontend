import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import ProfileTemplate from '@templates/ProfileTemplate';

import { userProfileState } from '@stores/user';
import { updateMyProfile } from '@src/apis/member';

const ProfilePage: React.FC = () => {
  const [myProfile, setMyProfile] = useRecoilState(userProfileState);
  const [newName, setNewName] = useState(myProfile.name);
  const [newBio, setNewBio] = useState(myProfile.bio);

  const [isActive, setIsActive] = useState(false);
  const isPassedSubmit = () => {
    return newName !== myProfile?.name || newBio !== myProfile?.bio ? setIsActive(true) : setIsActive(false);
  };

  const handleUpdateProfile = async () => {
    const newProfile = await updateMyProfile({ name: newName, bio: newBio });
    if (newProfile) {
      setMyProfile((prev) => {
        return { ...prev, name: newProfile.name, bio: newProfile.bio };
      });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBio(e.target.value);
  };

  useEffect(() => {
    setNewName(myProfile.name);
    setNewBio(myProfile.bio);
  }, [myProfile]);

  return (
    <ProfileTemplate
      profile={myProfile}
      newName={newName}
      newBio={newBio}
      isActive={isActive}
      isPassedSubmit={isPassedSubmit}
      handleNameChange={handleNameChange}
      handleBioChange={handleBioChange}
      handleUpdateProfile={handleUpdateProfile}
    />
  );
};

export default ProfilePage;
