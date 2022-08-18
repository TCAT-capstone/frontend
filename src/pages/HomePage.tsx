import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

import HomeTemplate from '@templates/HomeTemplate';

import { userProfileState } from '@stores/user';
import { getTicketbookTickets } from '@apis/ticket';
import { getMemberProfile } from '@apis/member';
import { TicketListResType } from '@src/types/ticket';

interface HomeProfileType {
  img: string;
  name: string;
  bio: string;
  ticketCount: number;
  likeCount: number;
}

const initialProfile = {
  img: '',
  name: '',
  bio: '',
  ticketCount: 0,
  likeCount: 0,
};

const HomePage: React.FC = () => {
  const { homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const [profile, setProfile] = useState<HomeProfileType>(initialProfile);
  const [tickets, setTickets] = useState<TicketListResType>([]);

  const isMyHome = homeId === myProfile.homeId;

  const getProfile = async (homeId: string) => {
    const userProfile = await getMemberProfile(homeId);
    if (userProfile) {
      setProfile({
        img: userProfile.memberImg,
        name: userProfile.name,
        bio: userProfile.bio,
        ticketCount: userProfile.ticketCount,
        likeCount: userProfile.likeCount,
      });
    }
  };

  const getTickets = async () => {
    const data = await getTicketbookTickets(1);
    setTickets(data);
  };

  useEffect(() => {
    if (isMyHome) {
      setProfile({
        img: myProfile.memberImg,
        name: myProfile.name,
        bio: myProfile.bio,
        ticketCount: myProfile.ticketCount,
        likeCount: myProfile.likeCount,
      });
    } else if (homeId) {
      getProfile(homeId);
    }
    getTickets();
  }, []);

  return <HomeTemplate isMyHome={isMyHome} profile={profile} tickets={tickets} />;
};

export default HomePage;
