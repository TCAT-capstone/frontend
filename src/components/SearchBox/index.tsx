import React from 'react';

import searchImg from '@images/search.svg';
import { Container, SearchContent, SearchIcon } from './style';

interface Props {
  keyword: string;
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({ keyword, handleKeywordChange }) => {
  return (
    <Container>
      <SearchContent onChange={handleKeywordChange} value={keyword} placeholder="검색어를 입력하세요" />
      <SearchIcon>
        <img src={searchImg} alt="검색" width="18rem" />
      </SearchIcon>
    </Container>
  );
};

export default SearchBox;
