import React, { useState, useEffect, useRef } from 'react';

import searchImg from '@images/search.svg';
import xImg from '@images/x-black.svg';
import arrowImg from '@images/down-arrow.svg';
import OptionDropdown from './OptionDropdown';
import { Container, SearchContent, SearchButton, ResetButton, OptionContainer, OptionButton } from './style';

interface Props {
  option: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

const SearchBox: React.FC<Props> = ({ option, handleOptionChange }) => {
  const [text, setText] = useState('');
  const [onOptionDropdown, setOnOptionDropdown] = useState(false);
  const OptionContainerRef = useRef<HTMLDivElement>(null);

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText('');
  };

  const handleOptionDropdownClose = () => {
    setOnOptionDropdown(false);
  };

  const handleOptionDropdownToggle = () => {
    setOnOptionDropdown((prev) => !prev);
  };

  const handleClickOutside = ({ target }: { target: any }) => {
    if (onOptionDropdown && OptionContainerRef.current && !OptionContainerRef.current.contains(target)) {
      handleOptionDropdownClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <Container>
      <SearchContent
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        placeholder="검색어를 입력하세요"
      />
      <SearchButton>
        <img src={searchImg} alt="검색" width="18rem" />
      </SearchButton>
      {/* <ResetButton type="button" onClick={onReset}>
        <img src={xImg} alt="취소" width="11rem" />
      </ResetButton>
      <OptionContainer ref={OptionContainerRef}>
        <OptionButton onClick={handleOptionDropdownToggle}>
          {option}
          <img src={arrowImg} alt="더보기" width="11rem" />
        </OptionButton>
      </OptionContainer>
      {onOptionDropdown && <OptionDropdown handleOptionChange={handleOptionChange} />} */}
    </Container>
  );
};

export default SearchBox;
