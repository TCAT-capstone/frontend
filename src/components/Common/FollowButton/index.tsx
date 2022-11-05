import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getFollowingProfile, updateFollowing, deleteFollowing } from '@src/apis/follow';
import { getMemberProfile } from '@src/apis/member';
import { userProfileState } from '@stores/user';
import { SimpleProfileListType, SimpleProfileType, UpdateFollowingType } from '@src/types/member';

import { Button } from './style';

interface Props {
  followingHomeId: string;
}

const FollowButton: React.FC<Props> = ({ followingHomeId }) => {
  const myProfile = useRecoilValue(userProfileState);
  const [text, setText] = useState('');
  const [follows, setFollows] = useState<SimpleProfileListType>([]);
  const [followProfile, setFollowProfile] = useState<SimpleProfileType>();

  const getFollowing = async (homeId: string) => {
    const data = await getFollowingProfile(homeId);
    if (data) {
      setFollows(data);
    } else {
      setFollows([]);
    }
    checkFollowing(followingHomeId);
  };

  const checkFollowing = (followingHomeId: string) => {
    setFollowProfile(follows.find((f) => f.targetHomeId === followingHomeId));
    if (followProfile) {
      setText('구독 중');
    } else {
      setText('구독하기');
    }
  };

  const handleFollowButton = async () => {
    if (text === '구독 중') {
      const result = await deleteFollowing(myProfile.homeId, followingHomeId);
      if (result) {
        setText('구독하기');
      }
    } else {
      const newFollowProfile = await getMemberProfile(followingHomeId);
      if (newFollowProfile) {
        const result = await updateFollowing(myProfile.homeId, {
          targetHomeId: newFollowProfile.homeId,
          name: newFollowProfile.name,
          memberImg: newFollowProfile.memberImg,
          bio: newFollowProfile.bio,
        });
        if (result) {
          setText('구독 중');
        }
      }
    }
  };

  useEffect(() => {
    getFollowing(followingHomeId);
  }, []);

  return (
    <Button type="button" onClick={handleFollowButton}>
      {text}
    </Button>
  );
};

export default FollowButton;
