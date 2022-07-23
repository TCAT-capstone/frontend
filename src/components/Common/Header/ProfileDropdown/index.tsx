import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import { userProfileState } from '@stores/user';
import { ACCESS_TOKEN } from '@utils/constants';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import { Container, ProfileContainer, ProfileLinkContainer, LinkContainer } from './style';

const ProfileDropdown: React.FC = () => {
  const userProfile = useRecoilValue(userProfileState);
  const resetUserProfileState = useResetRecoilState(userProfileState);

  const handleLogout = () => {
    resetUserProfileState();
    localStorage.removeItem(ACCESS_TOKEN);
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon size={2.2} profileImg={userProfile.memberImg} />
        <ProfileLinkContainer>
          <b>{userProfile.name}</b>
          <Link to={`/@${userProfile.homeId}/profile`}>
            <span>프로필 관리</span>
          </Link>
        </ProfileLinkContainer>
      </ProfileContainer>
      <LinkContainer>
        <Link to={`/@${userProfile.homeId}`}>
          <span>나의 티켓 홈</span>
        </Link>
        <Link to="/">
          <span>나의 구독</span>
        </Link>
        <button type="button" onClick={handleLogout}>
          <span>로그아웃</span>
        </button>
      </LinkContainer>
    </Container>
  );
};

export default ProfileDropdown;
