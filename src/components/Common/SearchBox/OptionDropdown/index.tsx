import React, { useState } from 'react';

import { Container, OptionList, OptionItem } from './style';

interface Props {
  handleOptionChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

const OptionDropdown: React.FC<Props> = ({ handleOptionChange }) => {
  return (
    <Container>
      <OptionList>
        <OptionItem onClick={() => handleOptionChange} value="통합검색">
          통합검색
        </OptionItem>
        <OptionItem onClick={() => handleOptionChange} value="티켓정보">
          티켓정보
        </OptionItem>
      </OptionList>
    </Container>
  );
};

export default OptionDropdown;
