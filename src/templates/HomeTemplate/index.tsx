import React from 'react';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import BasicButton from '@components/Common/BasicButton';
import TicketbookList from '@components/TicketbookList';
import TicketList from '@components/TicketList';
import { TicketListType } from '@src/types/ticket';
import { TicketbookListType } from '@src/types/ticketbook';
import Layout from '@styles/Layout';
import { ProfileWrapper, ButtonWrapper, TicketbookListWrapper, HomeBackground } from './style';

interface Props {
  isMyHome: boolean;
  profile: {
    img: string;
    name: string;
    bio: string;
    ticketCount: number;
    likeCount: number;
  };
  tickets: TicketListType;
  isLoaded: boolean;
  ticketbooks: TicketbookListType;
  setTarget: any;
  handlePageNavigate: () => void;
}

const HomeTemplate: React.FC<Props> = ({
  isMyHome,
  profile,
  tickets,
  isLoaded,
  ticketbooks,
  setTarget,
  handlePageNavigate,
}) => {
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
          <BasicButton text="티켓추가" handler={handlePageNavigate} />
        ) : (
          <BasicButton text="구독하기" handler={() => {}} />
        )}
      </ButtonWrapper>
      <TicketbookListWrapper>
        <TicketbookList ticketbooks={ticketbooks} />
      </TicketbookListWrapper>
      <TicketList tickets={tickets} backgroundColor="white" isLoaded={isLoaded} setTarget={setTarget} />
      <HomeBackground />
    </Layout>
  );
};

export default HomeTemplate;
