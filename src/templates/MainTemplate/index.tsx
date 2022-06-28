import React from 'react';

import Header from '@components/Common/Header';

import { Layout } from './style';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <Header isLoggedIn={false} />
    </Layout>
  );
};

export default MainTemplate;
