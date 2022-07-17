import React, { useEffect, useState } from 'react';

import HomeTemplate from '@templates/HomeTemplate';

import userImg from '@images/sample-user-img.jpg';

import { getTicketbookTickets } from '@apis/ticket';
import { TicketListResType } from '@src/types/ticket';

const HomePage: React.FC = () => {
  const [tickets, setTickets] = useState<TicketListResType>([]);
  const isMyHome = true;
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

  return <HomeTemplate isMyHome={isMyHome} profile={profile} tickets={tickets} />;
};

export default HomePage;
