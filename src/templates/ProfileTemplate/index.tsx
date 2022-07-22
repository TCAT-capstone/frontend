import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import ProfileEditor from '@components/ProfileEditor';

import { ProfileFrame, ProfileWrapper, ProfileEditorWrapper } from './style';

interface Props {
  profile: {
    img: string;
    name: string;
    bio: string;
    ticketCount: number;
    likeCount: number;
  };
  newName: string;
  newBio: string;
  isActive: boolean;
  isPassedSubmit: () => void;
  handleNameChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  homeId: string;
}

const ProfileTemplate: React.FC<Props> = ({
  profile,
  newName,
  newBio,
  isActive,
  isPassedSubmit,
  handleNameChange,
  handleBioChange,
  homeId,
}) => {
  return (
    <Layout>
      <ProfileFrame>
        <ProfileWrapper>
          <ProfileBox
            img={profile.img}
            name={profile.name}
            bio={profile.bio}
            ticketCount={profile.ticketCount}
            likeCount={profile.likeCount}
          />
        </ProfileWrapper>
        <ProfileEditorWrapper>
          <ProfileEditor
            homeId={homeId}
            newName={newName}
            newBio={newBio}
            isActive={isActive}
            isPassedSubmit={isPassedSubmit}
            handleNameChange={handleNameChange}
            handleBioChange={handleBioChange}
          />
        </ProfileEditorWrapper>
      </ProfileFrame>
    </Layout>
  );
};

export default ProfileTemplate;
