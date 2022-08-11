import React from 'react';

import Layout from '@styles/Layout';
import TicketList from '@components/TicketList';

import { TicketListResType } from '@src/types/ticket';

interface Props {
  tickets: TicketListResType;
}

const SearchTemplate: React.FC<Props> = ({ tickets }) => {
  return (
    <Layout>
      <TicketList tickets={tickets} backgroundColor="purple" />
    </Layout>
  );
};

export default SearchTemplate;
