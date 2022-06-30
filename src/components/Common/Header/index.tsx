import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@images/logo.png';
import searchImg from '@images/search.svg';

import ProfileIcon from '@components/Common/ProfileIcon';
import BasicButton from '@components/Common/BasicButton';
import LoginModal from '@components/Modal/LoginModal';
import ProfileDropdown from './ProfileDropdown';

import { Container, ButtonContainer, SearchButton, ProfileContainer, ProfileButton } from './style';

interface Props {
  isLoggedIn: boolean;
}

const Header: React.FC<Props> = ({ isLoggedIn }) => {
  const [onLoginModal, setOnLoginModal] = useState(false);
  const [onProfileDropdown, setOnProfileDropdown] = useState(false);

  const handleLoginModalOpen = () => {
    setOnLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setOnLoginModal(false);
  };

  const handleProfileDropdownClose = () => {
    setOnProfileDropdown(false);
  };

  const handleProfileDropdownToggle = () => {
    setOnProfileDropdown((prev) => !prev);
  };

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="로고" width={58} />
      </Link>
      <ButtonContainer>
        <SearchButton>
          <img src={searchImg} alt="검색" />
        </SearchButton>
        {isLoggedIn ? (
          <ProfileContainer>
            <ProfileButton onClick={handleProfileDropdownToggle}>
              <ProfileIcon size={2.2} />
            </ProfileButton>
            {onProfileDropdown && <ProfileDropdown />}
          </ProfileContainer>
        ) : (
          <BasicButton text="로그인" handler={handleLoginModalOpen} />
        )}
      </ButtonContainer>
      {onLoginModal && <LoginModal handleLoginModalClose={handleLoginModalClose} />}
    </Container>
  );
};

export default Header;
