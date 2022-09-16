import React, { useState, useEffect } from 'react';

import searchImg from '@images/search.svg';
import { Container, SearchContent, SearchButton } from './style';

interface Props {
  condition: any;
  search: any;
}

const SearchBox: React.FC<Props> = ({ condition, search }) => {
  const [keyword, setKeyword] = useState(condition.keyword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmitSearch = ({ target }: { target: any }) => {
    if (target.key === 'Enter') {
      search(condition.keyword, condition.title, condition.date, condition.place, condition.seat);
    }
  };

  return (
    <Container>
      <SearchContent
        onChange={handleChange}
        value={keyword}
        placeholder="검색어를 입력하세요"
        onKeyPress={onSubmitSearch}
      />
      <SearchButton onClick={search}>
        <img src={searchImg} alt="검색" width="18rem" />
      </SearchButton>
    </Container>
  );
};

export default SearchBox;
