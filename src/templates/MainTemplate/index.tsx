import React from 'react';

import Header from '@components/Common/Header';
import Ticket from '@components/Ticket';

import { Layout } from './style';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <Header isLoggedIn />
      <Ticket />
    </Layout>
  );
};

export default MainTemplate;
