import React, { useEffect, useState } from 'react';

import MainTemplate from '@templates/MainTemplate';

import { getFeedTickets, getTrendTickets } from '@apis/ticket';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { TicketListType } from '@src/types/ticket';
import { cursorTo } from 'readline';

interface Props {
  isTrend: boolean;
}

type TrendCursorType = { cursorId: number | null; cursorLikeCount: number | null };

type FeedCursorType = { cursorId: number | null; cursorDate: string | null };

const initialTrendCursor = {
  cursorId: null,
  cursorLikeCount: null,
};

const initialFeedCursor = {
  cursorId: null,
  cursorDate: null,
};

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [trendCursor, setTrendCursor] = useState<TrendCursorType>(initialTrendCursor);
  const [feedCursor, setFeedCursor] = useState<FeedCursorType>(initialFeedCursor);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const { apiTrigger, setApiTrigger, setTarget } = useInfiniteScroll();

  const getTickets = async () => {
    if (!hasNotTicket) {
      setIsLoaded(true);
      const data = isTrend
        ? await getTrendTickets(trendCursor.cursorId, trendCursor.cursorLikeCount)
        : await getFeedTickets(feedCursor.cursorId, feedCursor.cursorDate);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
        } else {
          setTickets((prev) => [...prev, ...data.tickets]);
          if (isTrend) {
            setTrendCursor({
              cursorId: data.tickets[data.tickets.length - 1].ticketId,
              cursorLikeCount: data.tickets[data.tickets.length - 1].likeCount,
            });
          } else {
            setFeedCursor({
              cursorId: data.tickets[data.tickets.length - 1].ticketId,
              cursorDate: data.tickets[data.tickets.length - 1].date,
            });
          }
        }
      }
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTickets([]);
    setHasNoTicket(false);
    setTrendCursor(initialTrendCursor);
    setFeedCursor(initialFeedCursor);
    setApiTrigger(0);
  }, [isTrend]);

  useEffect(() => {
    if (apiTrigger > 0) {
      getTickets();
    }
  }, [apiTrigger]);

  return <MainTemplate isTrend={isTrend} tickets={tickets} isLoaded={isLoaded} setTarget={setTarget} />;
};

export default MainPage;
