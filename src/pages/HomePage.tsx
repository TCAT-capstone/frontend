import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import HomeTemplate from '@templates/HomeTemplate';
import userImg from '@images/sample-user-img.jpg';

import { userProfileState } from '@stores/user';
import { getTicketbookTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';
import { useParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { homeId } = useParams();
  const userProfile = useRecoilValue(userProfileState);
  const [tickets, setTickets] = useState<TicketListResType>([]);

  const isMyHome = homeId === userProfile.homeId;
  const myProfile = {
    img: userProfile.memberImg,
    name: userProfile.name,
    bio: userProfile.bio,
    ticketCount: userProfile.ticketCount,
    likeCount: userProfile.likeCount,
  };
  const profile = {
    img: userImg,
    name: '입장번호 1번',
    bio: '황금시대의 동력은 고동을 군영과 황금시대다.',
    ticketCount: 41,
    likeCount: 718,
  };

  const getTickets = async () => {
    const data = await getTicketbookTickets(1);
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return <HomeTemplate isMyHome={isMyHome} profile={isMyHome ? myProfile : profile} tickets={tickets} />;
};

export default HomePage;
