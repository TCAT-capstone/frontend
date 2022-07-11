import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MainTemplate from '@templates/MainTemplate';

import { getTrendTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';

const MainPage: React.FC = () => {
  const location = useLocation();
  const [isTrend, setIsTrend] = useState(true);
  const [tickets, setTickets] = useState<TicketListResType>([]);

  const getTickets = async () => {
    const data = await getTrendTickets();
    setTickets(data);
  };

  useEffect(() => {
    if (location.pathname === '/feed') setIsTrend(false);
    else setIsTrend(true);
  }, [location]);

  useEffect(() => {
    getTickets();
  }, []);

  return <MainTemplate isTrend={isTrend} tickets={tickets} />;
};

export default MainPage;
