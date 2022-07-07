import React from 'react';

import HomeTemplate from '@templates/HomeTemplate';

const HomePage: React.FC = () => {
  const isMyHome = true;
  return <HomeTemplate isMyHome={isMyHome} />;
};

export default HomePage;
