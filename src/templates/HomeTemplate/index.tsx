import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import BasicButton from '@components/Common/BasicButton';
import TicketbookList from '@components/TicketbookList';
import TicketList from '@components/TicketList';

import { ProfileWrapper, ButtonWrapper, TicketbookListWrapper, TicketBackground } from './style';

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
      <TicketbookListWrapper>
        <TicketbookList />
      </TicketbookListWrapper>
      <TicketList backgroundColor="white" />
      <TicketBackground color="PURPLE" />
    </Layout>
  );
};

export default HomeTemplate;
