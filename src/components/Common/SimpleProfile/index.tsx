import React from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import FollowButton from '@components/Common/FollowButton';

import { Container, ButtonWrapper } from './style';

interface Props {
  targetHomeId: string;
  memberImg: string;
  name: string;
  bio: string;
}

const SimpleProfile: React.FC<Props> = ({ targetHomeId, memberImg, name, bio }) => {
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
        <FollowButton followingHomeId={targetHomeId} />
      </ButtonWrapper>
    </Container>
  );
};

export default SimpleProfile;
