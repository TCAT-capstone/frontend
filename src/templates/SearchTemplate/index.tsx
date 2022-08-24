import React from 'react';

import Layout from '@styles/Layout';
import SearchBox from '@components/Common/SearchBox';
import TicketList from '@components/TicketList';

import { TicketListType } from '@src/types/ticket';

interface Props {
  tickets: TicketListType;
  option: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  isLoaded: boolean;
  setTarget: any;
}

const SearchTemplate: React.FC<Props> = ({ tickets, option, handleOptionChange, isLoaded, setTarget }) => {
  return (
    <Layout>
      <SearchBox option={option} handleOptionChange={handleOptionChange} />
      <TicketList tickets={tickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={setTarget} />
    </Layout>
  );
};

export default SearchTemplate;
