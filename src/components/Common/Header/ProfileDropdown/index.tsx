import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import { userProfileState } from '@stores/user';
import { ACCESS_TOKEN } from '@utils/constants';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import { Container, ProfileContainer, ProfileLinkContainer, LinkContainer } from './style';

interface Props {
  handleFollowModalOpen: () => void;
}

const ProfileDropdown: React.FC<Props> = ({ handleFollowModalOpen }) => {
  const myProfile = useRecoilValue(userProfileState);
  const resetUserProfileState = useResetRecoilState(userProfileState);



  const handleLogout = () => {
    resetUserProfileState();
    localStorage.removeItem(ACCESS_TOKEN);
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon size={2.2} profileImg={myProfile.memberImg} />
        <ProfileLinkContainer>
          <b>{myProfile.name}</b>
          <Link to={`/@${myProfile.homeId}/profile`}>
            <span>프로필 관리</span>
          </Link>
        </ProfileLinkContainer>
      </ProfileContainer>
      <LinkContainer>
        <Link to={`/@${myProfile.homeId}`}>
          <span>나의 티켓 홈</span>
        </Link>
        <button type="button" onClick={handleFollowModalOpen}>
          <span>나의 구독</span>
        </button>
        <Link to={`/@${myProfile.homeId}/ticketbook`}>
          <span>티켓북 관리</span>
        </Link>
        <button type="button" onClick={handleLogout}>
          <span>로그아웃</span>
        </button>
      </LinkContainer>
    </Container>
  );
};

export default ProfileDropdown;
