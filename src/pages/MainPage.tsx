import React, { useEffect, useState } from 'react';

import MainTemplate from '@templates/MainTemplate';

import { getTrendTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';

interface Props {
  isTrend: boolean;
}

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const [tickets, setTickets] = useState<TicketListResType>([]);

  const getTickets = async () => {
    const data = await getTrendTickets();
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return <MainTemplate isTrend={isTrend} tickets={tickets} />;
};

export default MainPage;
