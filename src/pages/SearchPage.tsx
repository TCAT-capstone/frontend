import React, { useEffect, useState } from 'react';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';
import useInfiniteScroll from '@src/hooks/useInfiniteScroll';

type CursorType = {
  cursorId: number | null;
};

const initialCursor = {
  cursorId: null,
};

const SearchPage: React.FC = () => {
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [cursor, setCursor] = useState<CursorType>(initialCursor);
  const [keyword, setKeyword] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const { apiTrigger, setTarget } = useInfiniteScroll();

  const [condition, setCondition] = useState({
    title: '',
    date: '',
    place: '',
    seat: '',
  });

  const getTickets = async (
    cursorId: number | null,
    keyword: string | null,
    ticketTitle: string | null,
    ticketDate: string | null,
    ticketSeat: string | null,
    ticketLocation: string | null,
  ) => {
    if (keyword === '' && ticketTitle === '' && ticketDate === '' && ticketLocation === '' && ticketSeat === '') {
      setIsLoaded(false);
    } else if (!hasNotTicket) {
      setIsLoaded(true);
      const data = await getSearchTickets(cursorId, keyword, ticketTitle, ticketDate, ticketLocation, ticketSeat);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
        } else {
          setTickets((prev) => [...prev, ...data.tickets]);
          setCursor({
            cursorId: data.tickets[data.tickets.length - 1].ticketId,
          });
        }
      }
      setIsLoaded(false);
    }
  };

  const search = ({ title, date, place, seat }: { title: string; date: string; place: string; seat: string }) => {
    if (condition.title !== title || condition.date !== date || condition.place !== place || condition.seat !== seat) {
      setCondition({
        title,
        date,
        place,
        seat,
      });
    }
  };

  useEffect(() => {
    if (apiTrigger > 0) {
      getTickets(cursor.cursorId, keyword, condition.title, condition.date, condition.place, condition.seat);
    }
  }, [apiTrigger]);

  return (
    <SearchTemplate tickets={tickets} isLoaded={isLoaded} setTarget={setTarget} condition={condition} search={search} />
  );
};

export default SearchPage;
