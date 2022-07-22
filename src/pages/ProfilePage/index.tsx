import React, { useState } from 'react';

import userImg from '@images/sample-user-img.jpg';

import ProfileTemplate from '@templates/ProfileTemplate';

const ProfilePage: React.FC = () => {
  const profile = {
    img: userImg,
    name: '입장번호 1번',
    bio: '황금시대의 동력은 고동을 군영과 황금시대다.',
    ticketCount: 41,
    likeCount: 718,
  };

  const [newName, setNewName] = useState(profile.name);
  const [newBio, setNewBio] = useState(profile.bio);

  const [isActive, setIsActive] = useState(false);
  const isPassedSubmit = () => {
    return newName !== profile.name || newBio !== profile.bio ? setIsActive(true) : setIsActive(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBio(e.target.value);
  };

  return (
    <ProfileTemplate
      profile={profile}
      homeId="dkskglssdsd"
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
