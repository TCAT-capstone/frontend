import React, { useEffect, useState } from 'react';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';

const SearchPage: React.FC = () => {
  const [tickets, setTickets] = useState<TicketListResType>([]);
  const [option, setOption] = useState('통합검색');

  const getTickets = async () => {
    const data = await getSearchTickets();
    setTickets(data);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setOption((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return <SearchTemplate tickets={tickets} option={option} handleOptionChange={handleOptionChange} />;
};

export default SearchPage;
