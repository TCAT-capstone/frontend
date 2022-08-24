import React, { useEffect, useState } from 'react';

import MainTemplate from '@templates/MainTemplate';

import { getTrendTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';

interface Props {
  isTrend: boolean;
}

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [cursor, setCursor] = useState<{ cursorId: number | null; cursorLikeCount: number | null }>({
    cursorId: null,
    cursorLikeCount: null,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState();
  const [apiTrigger, setApiTrigger] = useState(0);
  const [hasNotTicket, setHasNoTicket] = useState(false);

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

  const onIntersect = async ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !isLoaded) {
      console.log('intersecting');
      setApiTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (apiTrigger > 0) {
      console.log('get');
      getTickets();
    }
  }, [apiTrigger]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  return <MainTemplate isTrend={isTrend} tickets={tickets} isLoaded={isLoaded} setTarget={setTarget} />;
};

export default MainPage;
