import React, { useEffect, useState } from 'react';

import MainTemplate from '@templates/MainTemplate';

import { getTrendTickets } from '@apis/ticket';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { TicketListType } from '@src/types/ticket';

interface Props {
  isTrend: boolean;
}

type CursorType = { cursorId: number | null; cursorLikeCount: number | null };

const initialCursor = {
  cursorId: null,
  cursorLikeCount: null,
};

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [cursor, setCursor] = useState<CursorType>(initialCursor);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const { apiTrigger, setTarget } = useInfiniteScroll();

  const getTickets = async () => {
    if (!hasNotTicket) {
      setIsLoaded(true);
      const data = await getTrendTickets(cursor.cursorId, cursor.cursorLikeCount);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
        } else {
          setTickets((prev) => [...prev, ...data.tickets]);
          setCursor({
            cursorId: data.tickets[data.tickets.length - 1].ticketId,
            cursorLikeCount: data.tickets[data.tickets.length - 1].likeCount,
          });
        }
      }
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    if (apiTrigger > 0) {
      getTickets();
    }
  }, [apiTrigger]);

  return <MainTemplate isTrend={isTrend} tickets={tickets} isLoaded={isLoaded} setTarget={setTarget} />;
};

export default MainPage;
