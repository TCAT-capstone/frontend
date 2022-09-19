import React, { KeyboardEvent } from 'react';

import searchImg from '@images/search.svg';
import { Container, SearchContent, SearchButton } from './style';

interface Props {
  keyword: string;
  search: () => void;
  onSubmitSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({ keyword, search, onSubmitSearch, handleKeywordChange }) => {
  return (
    <Container>
      <SearchContent
        onChange={handleKeywordChange}
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
