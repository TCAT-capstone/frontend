import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@images/logo.png';
import searchImg from '@images/search.svg';
import ProfileIcon from '@components/common/ProfileIcon';
import BasicButton from '@components/common/BasicButton';

import { Container, ButtonContainer, SearchWrapper } from './style';

export interface Props {
  isLoggedIn: boolean;
}

const Header: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="로고" width={58} />
      </Link>
      <ButtonContainer>
        <SearchWrapper>
          <img src={searchImg} alt="검색" />
        </SearchWrapper>
        {isLoggedIn ? <ProfileIcon /> : <BasicButton text="로그인" handler={() => {}} />}
      </ButtonContainer>
    </Container>
  );
};

export default Header;
