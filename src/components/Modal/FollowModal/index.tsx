import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import ModalFrame from '@components/Modal/ModalFrame';
import FollowTab from '@components/Common/Tab/FollowTab';
import FollowList from '@components/FollowList';
import SimpleProfile from '@src/components/Common/SimpleProfile';

import { SimpleProfileListType } from '@src/types/member';

import { userProfileState } from '@stores/user';
import { getFollowingProfile, getFollowerProfile } from '@apis/follow';

import { Container } from './style';

interface Props {
  handleFollowModalClose: () => void;
}

const FollowModal: React.FC<Props> = ({ handleFollowModalClose }) => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [followingProfiles, setFollowingProfiles] = useState<SimpleProfileListType>([]);
  const [followerProfiles, setFollowerProfiles] = useState<SimpleProfileListType>([]);
  const { homeId } = useRecoilValue(userProfileState);

  const getFollowingProfiles = async () => {
    const data = await getFollowingProfile(homeId);
    if (data) {
      setFollowingProfiles(data);
    } else {
      setFollowingProfiles([]);
    }
  };

  const getFollowerProfiles = async () => {
    const data = await getFollowerProfile(homeId);
    if (data) {
      setFollowerProfiles(data);
    } else {
      setFollowerProfiles([]);
    }
  };

  const handleFirstLink = () => {
    setIsFollowing(true);
    getFollowingProfiles();
  };

  const handleSecondLink = () => {
    setIsFollowing(false);
    getFollowerProfiles();
  };

  return (
    <ModalFrame w={43} h={48} handleModalClose={handleFollowModalClose}>
      <Container>
        <FollowTab
          firstText="구독중"
          secondText="구독자"
          handleFirstLink={handleFirstLink}
          handleSecondLink={handleSecondLink}
          focus={isFollowing ? 'first' : 'second'}
        />
        <FollowList>
          {isFollowing
            ? followingProfiles.map((t) => (
                <SimpleProfile key={t.homeId} homeId={t.homeId} memberImg={t.memberImg} name={t.name} bio={t.bio} />
              ))
            : followerProfiles.map((t) => (
                <SimpleProfile key={t.homeId} homeId={t.homeId} memberImg={t.memberImg} name={t.name} bio={t.bio} />
              ))}
        </FollowList>
      </Container>
    </ModalFrame>
  );
};

export default FollowModal;
