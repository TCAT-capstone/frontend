import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import ProfileEditor from '@components/ProfileEditor';

import { ProfileType } from '@src/types/member';
import { ProfileFrame, ProfileWrapper, ProfileEditorWrapper } from './style';

interface Props {
  profile: ProfileType | undefined;
  newName: string;
  newBio: string;
  nameError: { state: 'error' | 'valid'; message: string };
  bioError: { state: 'error' | 'valid'; message: string };
  isButtonActive: boolean;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateProfile: () => void;
}

const ProfileTemplate: React.FC<Props> = ({
  profile,
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
    <Layout>
      {profile ? (
        <ProfileFrame>
          <ProfileWrapper>
            <ProfileBox
              img={profile.memberImg}
              name={profile.name}
              bio={profile.bio}
              ticketCount={profile.ticketCount}
              likeCount={profile.likeCount}
            />
          </ProfileWrapper>
          <ProfileEditorWrapper>
            <ProfileEditor
              homeId={profile.homeId}
              newName={newName}
              newBio={newBio}
              nameError={nameError}
              bioError={bioError}
              isButtonActive={isButtonActive}
              handleNameChange={handleNameChange}
              handleBioChange={handleBioChange}
              handleUpdateProfile={handleUpdateProfile}
            />
          </ProfileEditorWrapper>
        </ProfileFrame>
      ) : (
        <p>로딩중</p>
      )}
    </Layout>
  );
};

export default ProfileTemplate;
