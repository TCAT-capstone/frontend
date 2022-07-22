import React, { useEffect, useState } from 'react';

import ProfileTemplate from '@templates/ProfileTemplate';

import { getMemberProfile } from '@apis/member';
import { ProfileType } from '@src/types/member';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType>();
  const [newName, setNewName] = useState('');
  const [newBio, setNewBio] = useState('');

  const [isActive, setIsActive] = useState(false);
  const isPassedSubmit = () => {
    return newName !== profile?.name || newBio !== profile?.bio ? setIsActive(true) : setIsActive(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBio(e.target.value);
  };

  const getProfile = async () => {
    const data = await getMemberProfile(1);
    if (data) {
      setProfile(data);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setNewName(profile?.name);
      setNewBio(profile?.bio);
    }
  }, [profile]);

  return (
    <ProfileTemplate
      profile={profile}
      newName={newName}
      newBio={newBio}
      isActive={isActive}
      isPassedSubmit={isPassedSubmit}
      handleNameChange={handleNameChange}
      handleBioChange={handleBioChange}
    />
  );
};

export default ProfilePage;
