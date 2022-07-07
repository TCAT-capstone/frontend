import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import BasicButton from '@components/Common/BasicButton';

import { ProfileWrapper, ButtonWrapper } from './style';

interface Props {
  isMyHome: boolean;
}

const HomeTemplate: React.FC<Props> = ({ isMyHome }) => {
  return (
    <Layout>
      <ProfileWrapper>
        <ProfileBox />
      </ProfileWrapper>
      <ButtonWrapper>
        {isMyHome ? (
          <BasicButton text="티켓추가" handler={() => {}} />
        ) : (
          <BasicButton text="구독하기" handler={() => {}} />
        )}
      </ButtonWrapper>
    </Layout>
  );
};

export default HomeTemplate;
