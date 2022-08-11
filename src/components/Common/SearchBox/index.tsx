import React, { useState, useEffect, useRef } from 'react';

import searchImg from '@images/search.svg';
import xImg from '@images/x-black.svg';
import arrowImg from '@images/down-arrow.svg';
import OptionDropdown from './OptionDropdown';
import { Container, SearchContent, ResetButton, OptionContainer, OptionButton } from './style';

const SearchBox: React.FC = () => {
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
      <img src={searchImg} alt="검색" width="18rem" />
      <SearchContent
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        placeholder="검색어를 입력하세요"
      />
      <ResetButton type="button" onClick={onReset}>
        <img src={xImg} alt="취소" width="11rem" />
      </ResetButton>
      <OptionContainer ref={OptionContainerRef}>
        <OptionButton onClick={handleOptionDropdownToggle}>
          통합검색
          <img src={arrowImg} alt="더보기" width="11rem" />
        </OptionButton>
      </OptionContainer>
      {onOptionDropdown && <OptionDropdown />}
    </Container>
  );
};

export default SearchBox;
