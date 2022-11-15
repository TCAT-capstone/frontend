import React from 'react';
import { useRecoilState } from 'recoil';

import { ticketState } from '@stores/editor';

import TicketImg from '@images/ticket-title.svg';
import CalendarImg from '@images/calendar.svg';
import LocationImg from '@images/location.svg';
import SeatImg from '@images/seat.svg';
import CastImg from '@images/cast.svg';
import { Container, InfoContainer } from './style';

const TicketInfoMenu: React.FC = () => {
  const [ticketInfo, setTicketInfo] = useRecoilState(ticketState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicketInfo((prev) => {
      return { ...prev, [e.target.dataset.type as string]: e.target.value };
    });
  };

  return (
    <Container>
      <InfoContainer>
        <img src={TicketImg} alt="티켓 아이콘" />
        <input type="text" data-type="title" onChange={handleInputChange} value={ticketInfo.title} maxLength={20} />
      </InfoContainer>
      <InfoContainer>
        <img src={CalendarImg} alt="달력 아이콘" />
        <input type="datetime-local" data-type="date" onChange={handleInputChange} value={ticketInfo.date} />
      </InfoContainer>
      <InfoContainer>
        <img src={LocationImg} alt="위치 아이콘" />
        <input
          type="text"
          data-type="location"
          onChange={handleInputChange}
          value={ticketInfo.location}
          maxLength={20}
        />
      </InfoContainer>
      <InfoContainer>
        <img src={SeatImg} alt="좌석 아이콘" />
        <input type="text" data-type="seat" onChange={handleInputChange} value={ticketInfo.seat} maxLength={20} />
      </InfoContainer>
      <InfoContainer>
        <img src={CastImg} alt="사람 아이콘" />
        <input
          type="text"
          data-type="casting"
          onChange={handleInputChange}
          value={ticketInfo.casting}
          maxLength={100}
        />
      </InfoContainer>
    </Container>
  );
};

export default TicketInfoMenu;
