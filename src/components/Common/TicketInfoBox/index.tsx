import React from 'react';
import { Link } from 'react-router-dom';

import TicketImg from '@images/ticket-title.svg';
import CalendarImg from '@images/calendar.svg';
import LocationImg from '@images/location.svg';
import SeatImg from '@images/seat.svg';
import CastImg from '@images/cast.svg';

import { getDateTimeString, getDateStringDash } from '@utils/string';

import { Container, InfoContainer } from './style';

interface Props {
  title: string;
  date: Date;
  location: string;
  seat: string;
  casting: string;
}

const TicketInfoBox: React.FC<Props> = ({ title, date, location, seat, casting }) => {
  return (
    <Container>
      <Link to="/search" state={{ type: 'title', data: title }}>
        <InfoContainer>
          <img src={TicketImg} alt="티켓 아이콘" />
          <span>{title}</span>
        </InfoContainer>
      </Link>
      <Link to="/search" state={{ type: 'date', data: getDateStringDash(date) }}>
        <InfoContainer>
          <img src={CalendarImg} alt="달력 아이콘" />
          <span>{getDateTimeString(date)}</span>
        </InfoContainer>
      </Link>
      <Link to="/search" state={{ type: 'location', data: location }}>
        <InfoContainer>
          <img src={LocationImg} alt="위치 아이콘" />
          <span>{location}</span>
        </InfoContainer>
      </Link>
      <Link to="/search" state={{ type: 'seat', data: { location, seat } }}>
        <InfoContainer>
          <img src={SeatImg} alt="좌석 아이콘" />
          <span>{seat}</span>
        </InfoContainer>
      </Link>
      <Link to="/search" state={{ type: 'casting', data: casting }}>
        <InfoContainer>
          <img src={CastImg} alt="사람 아이콘" />
          <span>{casting}</span>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default TicketInfoBox;
