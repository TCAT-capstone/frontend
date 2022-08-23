import React, { useEffect, useState } from 'react';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';

const SearchPage: React.FC = () => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [option, setOption] = useState('통합검색');
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState();

  const getTickets = async () => {
    const data = await getSearchTickets();
    if (data) {
      setTickets(data.tickets);
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setOption((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <SearchTemplate
      tickets={tickets}
      option={option}
      handleOptionChange={handleOptionChange}
      isLoaded={isLoaded}
      setTarget={setTarget}
    />
  );
};

export default SearchPage;
