import React from 'react';

import Layout from '@styles/Layout';
import SearchBox from '@src/components/SearchBox';
import SearchFilter from '@src/components/SearchBox/SearchFilter';
import TicketList from '@components/TicketList';

import { TicketListType } from '@src/types/ticket';

interface Props {
  tickets: TicketListType;
  isLoaded: boolean;
  setTarget: any;
  condition: any;
  search: any;
}

const SearchTemplate: React.FC<Props> = ({ tickets, isLoaded, setTarget, condition, search }) => {
  return (
    <Layout>
      <SearchBox condition={condition} search={search} />
      <SearchFilter />
      <TicketList tickets={tickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={setTarget} />
    </Layout>
  );
};

export default SearchTemplate;
