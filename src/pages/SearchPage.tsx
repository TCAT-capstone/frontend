import React, { useEffect, useState, KeyboardEvent } from 'react';

import SearchTemplate from '@templates/SearchTemplate';

import { getSearchTickets } from '@apis/ticket';
import { TicketListType } from '@src/types/ticket';
import useInfiniteScroll from '@src/hooks/useInfiniteScroll';

const SearchPage: React.FC = () => {
  const [searchedTickets, setSearchedTickets] = useState<TicketListType>([]);
  const [cursorId, setCursorId] = useState(-1);
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [seat, setSeat] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const { apiTrigger, setTarget } = useInfiniteScroll();

  const getSearchedTickets = async (
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
          setSearchedTickets((prev) => [...prev, ...data.tickets]);
          setCursorId(data.tickets[data.tickets.length - 1].ticketId);
        }
      }
      setIsLoaded(false);
    }
  };

  const resetTickets = () => {
    setCursorId(-1);
    setIsLoaded(false);
    setHasNoTicket(false);
    setSearchedTickets([]);
  };

  const search = () => {
    resetTickets();
    getSearchedTickets(cursorId, keyword, title, date, location, seat);
  };

  const onSubmitSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetTickets();
    setTitle(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetTickets();
    setDate(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetTickets();
    setLocation(e.target.value);
  };

  const handleSeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetTickets();
    setSeat(e.target.value);
  };

  useEffect(() => {
    if (apiTrigger > 0) {
      getSearchedTickets(cursorId, keyword, title, date, location, seat);
    }
  }, [apiTrigger]);

  useEffect(() => {
    resetTickets();
    getSearchedTickets(cursorId, keyword, title, date, location, seat);
  }, [title, date, location, seat]);

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
      search={search}
      onSubmitSearch={onSubmitSearch}
      handleKeywordChange={handleKeywordChange}
      handleTitleChange={handleTitleChange}
      handleDateChange={handleDateChange}
      handleLocationChange={handleLocationChange}
      handleSeatChange={handleSeatChange}
    />
  );
};

export default SearchPage;
