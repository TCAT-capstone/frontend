import React from 'react';

import Layout from '@styles/Layout';
import Ticket from '@components/Ticket';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <Ticket />
    </Layout>
  );
};

export default MainTemplate;
