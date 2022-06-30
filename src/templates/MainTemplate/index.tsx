import React from 'react';

import Header from '@components/Common/Header';

import { Layout } from './style';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <Header isLoggedIn />
    </Layout>
  );
};

export default MainTemplate;
