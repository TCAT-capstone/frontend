import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';
import useInfiniteScroll from '@src/hooks/useInfiniteScroll';

interface LocationStateType {
  type: 'title' | 'date' | 'location' | 'seat' | 'casting';
  data: any;
}

const SearchPage: React.FC = () => {
  const ulocation = useLocation();
  const state = ulocation.state as LocationStateType;
  const [searchedTickets, setSearchedTickets] = useState<TicketListType>([]);
  const [cursorId, setCursorId] = useState(-1);
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [seat, setSeat] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const [timer, setTimer] = useState<any>(0);
  const { apiTrigger, setTarget } = useInfiniteScroll();

  const getSearchedTickets = async (
    cursorId: number | null,
    keyword: string | null,
    ticketTitle: string | null,
    ticketDate: string | null,
    ticketSeat: string | null,
    ticketLocation: string | null,
    reset: boolean,
  ) => {
    setIsLoaded(true);
    if (reset) {
      const data = await getSearchTickets(null, keyword, ticketTitle, ticketDate, ticketSeat, ticketLocation);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
          setSearchedTickets(() => []);
        } else {
          setCursorId(data.tickets[data.tickets.length - 1].ticketId);
          setSearchedTickets(() => [...data.tickets]);
        }
      }
    } else if (!reset && !hasNotTicket) {
      const data = await getSearchTickets(cursorId, keyword, ticketTitle, ticketDate, ticketSeat, ticketLocation);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
        } else {
          setCursorId(data.tickets[data.tickets.length - 1].ticketId);
          setSearchedTickets((prev) => [...prev, ...data.tickets]);
        }
      }
    }
    setIsLoaded(false);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      await getSearchedTickets(cursorId, e.target.value, title, date, seat, location, true);
    }, 1000);
    setTimer(newTimer);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      await getSearchedTickets(cursorId, keyword, e.target.value, date, seat, location, true);
    }, 1000);
    setTimer(newTimer);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      await getSearchedTickets(cursorId, keyword, title, e.target.value, seat, location, true);
    }, 1000);
    setTimer(newTimer);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      await getSearchedTickets(cursorId, keyword, title, date, seat, e.target.value, true);
    }, 1000);
    setTimer(newTimer);
  };

  const handleSeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeat(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      await getSearchedTickets(cursorId, keyword, title, date, e.target.value, location, true);
    }, 1000);
    setTimer(newTimer);
  };

  useEffect(() => {
    if (state) {
      switch (state.type) {
        case 'title':
          setTitle(state.data);
          break;
        case 'date':
          setDate(state.data);
          break;
        case 'location':
          setLocation(state.data);
          break;
        case 'seat':
          setLocation(state.data.location);
          setSeat(state.data.seat);
          break;
        case 'casting':
          setKeyword(state.data);
          break;

        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    if (apiTrigger > 0) {
      getSearchedTickets(cursorId, keyword, title, date, seat, location, false);
    }
  }, [apiTrigger]);

  return (
    <SearchTemplate
      searchedTickets={searchedTickets}
      isLoaded={isLoaded}
      setTarget={setTarget}
      keyword={keyword}
      title={title}
      date={date}
      location={location}
      seat={seat}
      handleKeywordChange={handleKeywordChange}
      handleTitleChange={handleTitleChange}
      handleDateChange={handleDateChange}
      handleLocationChange={handleLocationChange}
      handleSeatChange={handleSeatChange}
    />
  );
};

export default SearchPage;
