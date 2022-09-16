import React from 'react';

import { Container, FilterContainer, FilterInput } from './style';

const SearchFilter: React.FC = () => {
  return (
    <Container>
      <FilterContainer>
        제목
        <FilterInput />
      </FilterContainer>
      <FilterContainer>
        일시
        <FilterInput type="date" />
      </FilterContainer>
      <FilterContainer>
        장소
        <FilterInput />
      </FilterContainer>
      <FilterContainer>
        좌석
        <FilterInput />
      </FilterContainer>
    </Container>
  );
};

export default SearchFilter;
