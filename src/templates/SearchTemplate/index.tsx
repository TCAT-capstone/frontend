import React, { KeyboardEvent } from 'react';

import Layout from '@styles/Layout';
import SearchBox from '@src/components/SearchBox';
import SearchFilter from '@src/components/SearchBox/SearchFilter';
import TicketList from '@components/TicketList';

import { TicketListType } from '@src/types/ticket';

interface Props {
  searchedTickets: TicketListType;
  isLoaded: boolean;
  setTarget: any;
  keyword: string;
  title: string;
  date: string;
  location: string;
  seat: string;
  search: () => void;
  onSubmitSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSeatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchTemplate: React.FC<Props> = ({
  searchedTickets,
  isLoaded,
  setTarget,
  keyword,
  title,
  date,
  location,
  seat,
  search,
  onSubmitSearch,
  handleKeywordChange,
  handleTitleChange,
  handleDateChange,
  handleLocationChange,
  handleSeatChange,
}) => {
  return (
    <Layout>
      <SearchBox
        keyword={keyword}
        search={search}
        onSubmitSearch={onSubmitSearch}
        handleKeywordChange={handleKeywordChange}
      />
      <SearchFilter
        title={title}
        date={date}
        location={location}
        seat={seat}
        handleTitleChange={handleTitleChange}
        handleDateChange={handleDateChange}
        handleLocationChange={handleLocationChange}
        handleSeatChange={handleSeatChange}
      />
      <TicketList tickets={searchedTickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={setTarget} />
    </Layout>
  );
};

export default SearchTemplate;
