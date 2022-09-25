import React from 'react';

import { Container, FilterContainer, FilterInput } from './style';

interface Props {
  title: string;
  date: string;
  location: string;
  seat: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSeatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter: React.FC<Props> = ({
  title,
  date,
  location,
  seat,
  handleTitleChange,
  handleDateChange,
  handleLocationChange,
  handleSeatChange,
}) => {
  return (
    <Container>
      <FilterContainer>
        제목
        <FilterInput onChange={handleTitleChange} value={title} />
      </FilterContainer>
      <FilterContainer>
        일시
        <FilterInput type="date" onChange={handleDateChange} value={date} />
      </FilterContainer>
      <FilterContainer>
        장소
        <FilterInput onChange={handleLocationChange} value={location} />
      </FilterContainer>
      <FilterContainer>
        좌석
        <FilterInput onChange={handleSeatChange} value={seat} />
      </FilterContainer>
    </Container>
  );
};

export default SearchFilter;
