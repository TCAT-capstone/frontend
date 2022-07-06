import React from 'react';

import Layout from '@styles/Layout';
import TicketList from '@components/TicketList';

const MainTemplate: React.FC = () => {
  return (
    <Layout>
      <TicketList />
    </Layout>
  );
};

export default MainTemplate;
