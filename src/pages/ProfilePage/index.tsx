import React from 'react';

import ProfileTemplate from '@templates/ProfileTemplate';

const ProfilePage: React.FC = () => {
  const profile = {
    name: '입장번호 1번',
    bio: '황금시대의 동력은 고동을 군영과 황금시대다.',
    ticketCount: 41,
    likeCount: 718,
  };
  return <ProfileTemplate profile={profile} homeId='dkskglssdsd' />;
};

export default ProfilePage;
