import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import FollowButton from '@components/Common/FollowButton';

import { updateFollowing, deleteFollowing } from '@src/apis/follow';
import { userProfileState } from '@stores/user';
import { SimpleProfileListType } from '@src/types/member';

import { Container, ButtonWrapper } from './style';

interface Props {
  targetHomeId: string;
  memberImg: string;
  name: string;
  bio: string;
  followingProfiles: SimpleProfileListType;
}

const SimpleProfile: React.FC<Props> = ({ targetHomeId, memberImg, name, bio, followingProfiles }) => {
  const myProfile = useRecoilValue(userProfileState);
  const [buttonText, setButtonText] = useState('...');

  const changeText = () => {
    if (followingProfiles) {
      if (followingProfiles.find((f) => f.targetHomeId === targetHomeId)) {
        setButtonText('구독 중');
      } else {
        setButtonText('구독하기');
      }
    }
  };

  const handleFollowButton = async () => {
    if (buttonText === '구독 중') {
      const result = await deleteFollowing(myProfile.homeId, targetHomeId);
      if (result) {
        setButtonText('구독하기');
      }
    } else {
      const result = await updateFollowing(myProfile.homeId, {
        targetHomeId,
        name,
        memberImg,
        bio,
      });
      if (result) {
        setButtonText('구독 중');
      }
    }
  };

  useEffect(() => {
    changeText();
  }, [followingProfiles]);

  return (
    <Container>
      <Link to={`/@${targetHomeId}`}>
        <ProfileIcon size={3.75} profileImg={memberImg} />
        <div>
          <b>{name}</b>
          <span>{bio}</span>
        </div>
      </Link>
      <ButtonWrapper>
        <FollowButton text={buttonText} handler={handleFollowButton} />
      </ButtonWrapper>
    </Container>
  );
};

export default SimpleProfile;
