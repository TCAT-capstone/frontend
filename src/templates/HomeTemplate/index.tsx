import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import ProfileBox from '@components/Common/Profile/ProfileBox';
import BasicButton from '@components/Common/BasicButton';
import FollowButton from '@components/Common/FollowButton';
import TicketbookSlider from '@src/components/Ticketbook/TicketbookSlider';
import TicketList from '@components/TicketList';
import { TicketListType } from '@src/types/ticket';
import { TicketbookListType } from '@src/types/ticketbook';
import { SimpleProfileListType } from '@src/types/member';

import { updateFollowing, deleteFollowing } from '@src/apis/follow';

import Layout from '@styles/Layout';
import { ProfileWrapper, ButtonWrapper, TicketbookListWrapper, HomeBackground } from './style';

interface Props {
  isMyHome: boolean;
  isLoggedIn: boolean;
  homeId: string;
  targetHomeId: string | undefined;
  profile: {
    img: string | undefined;
    name: string;
    bio: string;
    ticketCount: number;
    likeCount: number;
  };
  following: SimpleProfileListType;
  tickets: TicketListType;
  isLoaded: boolean;
  ticketbooks: TicketbookListType;
  initialTicketbookCount: number;
  cloneTicketbooks: () => void;
  setTarget: any;
  handlePageNavigate: () => void;
  changeCurrTicketbookId: (idx: number) => void;
}

const HomeTemplate: React.FC<Props> = ({
  isMyHome,
  isLoggedIn,
  homeId,
  targetHomeId,
  profile,
  following,
  tickets,
  isLoaded,
  ticketbooks,
  initialTicketbookCount,
  cloneTicketbooks,
  setTarget,
  handlePageNavigate,
  changeCurrTicketbookId,
}) => {
  const [buttonText, setButtonText] = useState('...');

  const changeText = () => {
    if (following.find((f) => f.targetHomeId === targetHomeId)) {
      setButtonText('구독 중');
    } else {
      setButtonText('구독하기');
    }
    return buttonText;
  };

  const handleFollowButton = async () => {
    if (!isLoggedIn) {
      toast.error('로그인이 필요합니다!');
      return;
    }
    if (buttonText === '구독 중') {
      const result = await deleteFollowing(homeId, targetHomeId);
      if (result) {
        setButtonText('구독하기');
      }
    } else {
      const result = await updateFollowing(homeId, {
        targetHomeId,
        name: profile.name,
        memberImg: profile.img,
        bio: profile.bio,
      });
      if (result) {
        setButtonText('구독 중');
      }
    }
  };

  useEffect(() => {
    if (buttonText === '...') {
      changeText();
    }
  });

  useEffect(() => {
    changeText();
  }, [following]);

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
          <FollowButton text={buttonText} handler={handleFollowButton} />
        )}
      </ButtonWrapper>
      <TicketbookListWrapper>
        <TicketbookSlider
          ticketbooks={ticketbooks}
          initialTicketbookCount={initialTicketbookCount}
          cloneTicketbooks={cloneTicketbooks}
          changeCurrTicketbookId={changeCurrTicketbookId}
        />
      </TicketbookListWrapper>
      <TicketList tickets={tickets} backgroundColor="white" isLoaded={isLoaded} setTarget={setTarget} />
      <HomeBackground />
    </Layout>
  );
};

export default HomeTemplate;
