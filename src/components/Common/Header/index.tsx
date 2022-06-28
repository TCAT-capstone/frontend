import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@images/logo.png';
import searchImg from '@images/search.svg';

import ProfileIcon from '@components/Common/ProfileIcon';
import BasicButton from '@components/Common/BasicButton';
import LoginModal from '@components/Modal/LoginModal';

import { Container, ButtonContainer, SearchWrapper } from './style';

interface Props {
  isLoggedIn: boolean;
}

const Header: React.FC<Props> = ({ isLoggedIn }) => {
  const [onLoginModal, setOnLoginModal] = useState(false);

  const handleLoginModalOpen = () => {
    setOnLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setOnLoginModal(false);
  };

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="로고" width={58} />
      </Link>
      <ButtonContainer>
        <SearchWrapper>
          <img src={searchImg} alt="검색" />
        </SearchWrapper>
        {isLoggedIn ? <ProfileIcon /> : <BasicButton text="로그인" handler={handleLoginModalOpen} />}
      </ButtonContainer>
      {onLoginModal && <LoginModal handleLoginModalClose={handleLoginModalClose} />}
    </Container>
  );
};

export default Header;
