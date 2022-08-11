import React, { useEffect, useState } from 'react';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';

const SearchPage: React.FC = () => {
  const [tickets, setTickets] = useState<TicketListResType>([]);

  const getTickets = async () => {
    const data = await getSearchTickets();
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return <SearchTemplate tickets={tickets} />;
};

export default SearchPage;
