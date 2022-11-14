import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import MainTemplate from '@templates/MainTemplate';

import { getFeedTickets, getTrendTickets } from '@apis/ticket';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { isLoggedInState } from '@stores/user';
import { TicketListType } from '@src/types/ticket';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface Props {
  isTrend: boolean;
}

type TrendCursorType = { cursorId: number | null; cursorLikeCount: number | null };

type FeedCursorType = { cursorId: number | null; cursorDate: string | null };

type HasNoTicketsType = { trend: boolean; feed: boolean };

const initialTrendCursor = {
  cursorId: null,
  cursorLikeCount: null,
};

const initialFeedCursor = {
  cursorId: null,
  cursorDate: null,
};

const initialHasNoTickets = {
  trend: false,
  feed: false,
};

const MainPage: React.FC<Props> = ({ isTrend }) => {
  const navigate = useNavigate();
  const [trendTickets, setTrendTickets] = useState<TicketListType>([]);
  const [feedTickets, setFeedTickets] = useState<TicketListType>([]);
  const [trendCursor, setTrendCursor] = useState<TrendCursorType>(initialTrendCursor);
  const [feedCursor, setFeedCursor] = useState<FeedCursorType>(initialFeedCursor);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNoTicket, setHasNoTicket] = useState<HasNoTicketsType>(initialHasNoTickets);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { apiTrigger: trendApiTrigger, setTarget: trendSetTarget } = useInfiniteScroll();
  const { apiTrigger: feedApiTrigger, setTarget: feedSetTarget } = useInfiniteScroll();

  const getTrendTicketList = async () => {
    if (!hasNoTicket.trend) {
      setIsLoaded(true);
      const data = await getTrendTickets(trendCursor.cursorId, trendCursor.cursorLikeCount);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket((prev) => {
            return { ...prev, trend: true };
          });
        } else {
          setTrendTickets((prev) => [...prev, ...data.tickets]);
          setTrendCursor({
            cursorId: data.tickets[data.tickets.length - 1].ticketId,
            cursorLikeCount: data.tickets[data.tickets.length - 1].likeCount,
          });
        }
      }
      setIsLoaded(false);
    }
  };

  const getFeedTicketList = async () => {
    if (!isLoggedIn) {
      toast.error('로그인이 필요한 서비스입니다!');
      navigate('/', { replace: true });
      return;
    }
    if (!hasNoTicket.feed) {
      setIsLoaded(true);
      const data = await getFeedTickets(feedCursor.cursorId, feedCursor.cursorDate);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket((prev) => {
            return { ...prev, feed: true };
          });
        } else {
          setFeedTickets((prev) => [...prev, ...data.tickets]);
          setFeedCursor({
            cursorId: data.tickets[data.tickets.length - 1].ticketId,
            cursorDate: data.tickets[data.tickets.length - 1].date,
          });
        }
      }
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    if (trendApiTrigger > 0) {
      getTrendTicketList();
    }
  }, [trendApiTrigger]);

  useEffect(() => {
    if (feedApiTrigger > 0) {
      getFeedTicketList();
    }
  }, [feedApiTrigger]);

  return (
    <MainTemplate
      isTrend={isTrend}
      trendTickets={trendTickets}
      feedTickets={feedTickets}
      isLoaded={isLoaded}
      trendSetTarget={trendSetTarget}
      feedSetTarget={feedSetTarget}
    />
  );
};

export default MainPage;
