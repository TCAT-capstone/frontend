import React from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import BasicButton from '@components/Common/BasicButton';

import { Container, ButtonWrapper } from './style';

interface Props {
  homeId: number;
  memberImg: string;
  name: string;
  bio: string;
}

const SimpleProfile: React.FC<Props> = ({ homeId, memberImg, name, bio }) => {
  return (
    <Container>
      <Link to={`/~${homeId}`}>
        <ProfileIcon size={3.75} profileImg={memberImg} />
        <div>
          <b>{name}</b>
          <span>{bio}</span>
        </div>
      </Link>
      <ButtonWrapper>
        <BasicButton text="구독하기" handler={() => {}} />
      </ButtonWrapper>
    </Container>
  );
};

export default SimpleProfile;