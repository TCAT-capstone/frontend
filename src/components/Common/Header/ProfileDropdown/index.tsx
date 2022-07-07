import React from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '@components/Common/Profile/ProfileIcon';

import { Container, ProfileContainer, ProfileLinkContainer, LinkContainer } from './style';

const ProfileDropdown: React.FC = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon size={2.2} />
        <ProfileLinkContainer>
          <b>닉네임</b>
          <Link to="/">
            <span>프로필 관리</span>
          </Link>
        </ProfileLinkContainer>
      </ProfileContainer>
      <LinkContainer>
        <Link to="/">
          <span>나의 티켓 홈</span>
        </Link>
        <Link to="/">
          <span>나의 구독</span>
        </Link>
        <button type="button">
          <span>로그아웃</span>
        </button>
      </LinkContainer>
    </Container>
  );
};

export default ProfileDropdown;
