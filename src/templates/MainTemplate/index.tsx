import React from 'react';

import Header from '@components/common/Header';

import { Layout } from './style';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <Header isLoggedIn={false} />
    </Layout>
  );
};

export default MainTemplate;
