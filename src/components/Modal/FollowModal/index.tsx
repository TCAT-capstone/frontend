import React, { useState, useEffect } from 'react';
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
  };

  const handleSecondLink = () => {
    setIsFollowing(false);
  };

  useEffect(() => {
    getFollowingProfiles();
    getFollowerProfiles();
  }, []);

  useEffect(() => {
    getFollowingProfiles();
    getFollowerProfiles();
  }, [isFollowing]);

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
                <SimpleProfile
                  key={t.targetHomeId}
                  homeId={homeId}
                  targetHomeId={t.targetHomeId}
                  memberImg={t.memberImg}
                  name={t.name}
                  bio={t.bio}
                  followingProfiles={followingProfiles}
                  handleFollowModalClose={handleFollowModalClose}
                />
              ))
            : followerProfiles.map((t) => (
                <SimpleProfile
                  key={t.targetHomeId}
                  homeId={homeId}
                  targetHomeId={t.targetHomeId}
                  memberImg={t.memberImg}
                  name={t.name}
                  bio={t.bio}
                  followingProfiles={followingProfiles}
                  handleFollowModalClose={handleFollowModalClose}
                />
              ))}
        </FollowList>
      </Container>
    </ModalFrame>
  );
};

export default FollowModal;
