import React from 'react';

import Layout from '@styles/Layout';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import BasicButton from '@components/Common/BasicButton';
import TicketbookList from '@components/TicketbookList';
import TicketList from '@components/TicketList';

import { TicketListResType } from '@src/types/ticket';

import { ProfileWrapper, ButtonWrapper, TicketbookListWrapper, TicketBackground } from './style';

interface Props {
  isMyHome: boolean;
  profile: {
    img: string;
    name: string;
    bio: string;
    ticketCount: number;
    likeCount: number;
  };
  tickets: TicketListResType;
}

const HomeTemplate: React.FC<Props> = ({ isMyHome, profile, tickets }) => {
  return (
    <Layout>
      <ProfileWrapper>
        <ProfileBox
          img={profile.img}
          name={profile.name}
          bio={profile.bio}
          ticketCount={profile.ticketCount}
          likeCount={profile.likeCount}
        />
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
      <TicketList tickets={tickets} backgroundColor="white" />
      <TicketBackground color="PURPLE" />
    </Layout>
  );
};

export default HomeTemplate;
