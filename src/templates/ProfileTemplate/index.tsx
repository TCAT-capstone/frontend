import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import ProfileEditor from '@components/ProfileEditor';

import { ProfileFrame, ProfileWrapper, ProfileEditorWrapper } from './style';

interface Props {
  profile: {
    name: string;
    bio: string;
    ticketCount: number;
    likeCount: number;
  };
  homeId: string;
}

const ProfileTemplate: React.FC<Props> = ({ profile, homeId }) => {
  return (
    <Layout>
      <ProfileFrame>
        <ProfileWrapper>
          <ProfileBox
            name={profile.name}
            bio={profile.bio}
            ticketCount={profile.ticketCount}
            likeCount={profile.likeCount}
          />
        </ProfileWrapper>
        <ProfileEditorWrapper>
          <ProfileEditor homeId={homeId} name={profile.name} bio={profile.bio} />
        </ProfileEditorWrapper>
      </ProfileFrame>
    </Layout>
  );
};

export default ProfileTemplate;
