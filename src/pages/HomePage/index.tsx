import React from 'react';

import HomeTemplate from '@templates/HomeTemplate';

const HomePage: React.FC = () => {
  const isMyHome = true;
  const profile = {
    name: '입장번호 1번',
    bio: '황금시대의 동력은 고동을 군영과 황금시대다.',
    ticketCount: 41,
    likeCount: 718,
  };

  return <HomeTemplate isMyHome={isMyHome} profile={profile} />;
};

export default HomePage;
