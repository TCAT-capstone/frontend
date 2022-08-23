import React, { useEffect, useState } from 'react';

import MainTemplate from '@templates/MainTemplate';

import { getTrendTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';

interface Props {
  isTrend: boolean;
}

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState();

  const getTickets = async () => {
    const data = await getTrendTickets();
    if (data) {
      setTickets(data.tickets);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return <MainTemplate isTrend={isTrend} tickets={tickets} isLoaded={isLoaded} setTarget={setTarget} />;
};

export default MainPage;
