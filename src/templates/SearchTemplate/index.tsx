import React from 'react';

import Layout from '@styles/Layout';
import SearchBox from '@components/Common/SearchBox';
import TicketList from '@components/TicketList';

import { TicketListResType } from '@src/types/ticket';

interface Props {
  tickets: TicketListResType;
  option: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

const SearchTemplate: React.FC<Props> = ({ tickets, option, handleOptionChange }) => {
  return (
    <Layout>
      <SearchBox option={option} handleOptionChange={handleOptionChange} />
      <TicketList tickets={tickets} backgroundColor="purple" />
    </Layout>
  );
};

export default SearchTemplate;
