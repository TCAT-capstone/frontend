import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import HomeTemplate from '@templates/HomeTemplate';

import { userProfileState } from '@stores/user';
import { getTicketbookTickets } from '@apis/ticket';
import { getMemberProfile } from '@apis/member';
import { TicketListType } from '@src/types/ticket';

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
  const navigate = useNavigate();
  const { homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const [profile, setProfile] = useState<HomeProfileType>(initialProfile);
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState();
  const [apiTrigger, setApiTrigger] = useState(0);
  const [hasNotTicket, setHasNoTicket] = useState(false);

  const isMyHome = homeId === myProfile.homeId;

  const handlePageNavigate = () => {
    navigate('/editor/new');
  };

  const getProfile = async () => {
    if (isMyHome) {
      setProfile({
        img: myProfile.memberImg,
        name: myProfile.name,
        bio: myProfile.bio,
        ticketCount: myProfile.ticketCount,
        likeCount: myProfile.likeCount,
      });
    } else if (homeId) {
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
    }
  };

  const getTickets = async () => {
    if (!hasNotTicket) {
      setIsLoaded(true);
      const data = await getTicketbookTickets(1, cursorId);
      if (data) {
        if (data.hasNotTicket) {
          setHasNoTicket(true);
        } else {
          setTickets((prev) => [...prev, ...data.tickets]);
          setCursorId(data.tickets[data.tickets.length - 1].ticketId);
        }
      }
      setIsLoaded(false);
    }
  };

  const onIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting && !isLoaded) {
      console.log('intersecting');
      setApiTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (apiTrigger > 0) {
      console.log('get');
      getTickets();
    }
  }, [apiTrigger]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { rootMargin: '100px', threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  return (
    <HomeTemplate
      isMyHome={isMyHome}
      profile={profile}
      tickets={tickets}
      isLoaded={isLoaded}
      setTarget={setTarget}
      handlePageNavigate={handlePageNavigate}
    />
  );
};

export default HomePage;
