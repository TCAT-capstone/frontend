import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ErrorPage from '@pages/ErrorPage';
import HomeTemplate from '@templates/HomeTemplate';

import { isLoggedInState, userProfileState, userTicketbooksState } from '@stores/user';
import { getTicketbookTickets } from '@apis/ticket';
import { getFollowingProfile } from '@apis/follow';
import { getMemberProfile } from '@apis/member';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { TicketListType } from '@src/types/ticket';
import { TicketbookListType } from '@src/types/ticketbook';
import { SimpleProfileListType } from '@src/types/member';
import { getTicketbooks } from '@apis/ticketbook';

interface HomeProfileType {
  img: string | undefined;
  name: string;
  bio: string;
  ticketCount: number;
  likeCount: number;
}

const initialProfile = {
  img: undefined,
  name: '',
  bio: '',
  ticketCount: 0,
  likeCount: 0,
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const myTicketbooks = useRecoilValue(userTicketbooksState);
  const [isMyHome, setIsMyhome] = useState(homeId === myProfile.homeId);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [profile, setProfile] = useState<HomeProfileType>(initialProfile);
  const [tickets, setTickets] = useState<TicketListType>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialTicketbookCount, setInitialTicketbookCount] = useState(0);
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [hasNotTicket, setHasNoTicket] = useState(false);
  const [noSuchUser, setNoSuchUser] = useState(false);
  const [ticketbooks, setTicketbooks] = useState<TicketbookListType>([]);
  const [followingProfiles, setFollowingProfiles] = useState<SimpleProfileListType>([]);
  const [currTicketbookId, setCurrTicketbookId] = useState(-1);
  const { apiTrigger, setApiTrigger, setTarget } = useInfiniteScroll();

  const handlePageNavigate = () => {
    navigate('/editor/new');
  };

  const cloneTicketbooks = () => {
    if (!isDuplicated && initialTicketbookCount <= 5 && initialTicketbookCount > 1) {
      const addedLast = [];
      let index = 0;
      while (index < ticketbooks.length) {
        addedLast.push(ticketbooks[index % ticketbooks.length]);
        index += 1;
      }
      setTicketbooks([...ticketbooks, ...addedLast]);
      setIsDuplicated(true);
    }
  };

  const getProfileAndTicketbooks = async () => {
    if (isMyHome) {
      setProfile({
        img: myProfile.memberImg,
        name: myProfile.name,
        bio: myProfile.bio,
        ticketCount: myProfile.ticketCount,
        likeCount: myProfile.likeCount,
      });
      setIsDuplicated(false);
      setInitialTicketbookCount(myTicketbooks.length);
      setTicketbooks(myTicketbooks);
      setCurrTicketbookId(myTicketbooks[0].id);
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
        if (myProfile.homeId) {
          const following = await getFollowingProfile(myProfile.homeId);
          if (following) {
            setFollowingProfiles(following);
          } else {
            setFollowingProfiles([]);
          }
        }
        const userTicketbooks = await getTicketbooks(homeId);
        setIsDuplicated(false);
        setInitialTicketbookCount(userTicketbooks.length);
        setTicketbooks(userTicketbooks);
        setCurrTicketbookId(userTicketbooks[0].id);
      } else {
        setNoSuchUser(true);
      }
    }
  };

  const getTickets = async () => {
    if (!hasNotTicket && currTicketbookId !== -1) {
      setIsLoaded(true);
      const data = await getTicketbookTickets(currTicketbookId, cursorId);
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

  const changeCurrTicketbookId = (idx: number) => {
    setCurrTicketbookId(ticketbooks[idx].id);
  };

  useEffect(() => {
    setIsMyhome(homeId === myProfile.homeId);
    getProfileAndTicketbooks();
  }, [homeId, myProfile.homeId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTickets([]);
    setHasNoTicket(false);
    setCursorId(null);
    setApiTrigger(0);
  }, [currTicketbookId]);

  useEffect(() => {
    if (apiTrigger > 0) {
      getTickets();
    }
  }, [apiTrigger]);

  return noSuchUser ? (
    <ErrorPage />
  ) : (
    <HomeTemplate
      isMyHome={isMyHome}
      isLoggedIn={isLoggedIn}
      homeId={myProfile.homeId}
      targetHomeId={homeId}
      profile={profile}
      following={followingProfiles}
      tickets={tickets}
      isLoaded={isLoaded}
      ticketbooks={ticketbooks}
      initialTicketbookCount={initialTicketbookCount}
      cloneTicketbooks={cloneTicketbooks}
      setTarget={setTarget}
      handlePageNavigate={handlePageNavigate}
      changeCurrTicketbookId={changeCurrTicketbookId}
    />
  );
};

export default HomePage;
