import React from 'react';

import TicketImg from '@images/ticket-title.svg';
import CalendarImg from '@images/calendar.svg';
import LocationImg from '@images/location.svg';
import SeatImg from '@images/seat.svg';
import CastImg from '@images/cast.svg';

import { getDateTimeString } from '@utils/string';

import { Container, InfoContainer } from './style';

interface Props {
  title: string;
  date: Date;
  location: string;
  seat: string;
  casting: string;
}

const TicketInfoBox: React.FC<Props> = ({ title, date, location, seat, casting }) => {
  const castingList = casting.split(',');

  return (
    <Container>
      <InfoContainer>
        <img src={TicketImg} alt="티켓 아이콘" />
        <span>{title}</span>
      </InfoContainer>
      <InfoContainer>
        <img src={CalendarImg} alt="달력 아이콘" />
        <span>{getDateTimeString(date)}</span>
      </InfoContainer>
      <InfoContainer>
        <img src={LocationImg} alt="위치 아이콘" />
        <span>{location}</span>
      </InfoContainer>
      <InfoContainer>
        <img src={SeatImg} alt="좌석 아이콘" />
        <span>{seat}</span>
      </InfoContainer>
      <InfoContainer>
        <img src={CastImg} alt="사람 아이콘" />
        <div>
          {castingList.map((c, i) => (
            <>
              <span key={c}>{c}</span>
              {i !== castingList.length - 1 && <span> / </span>}
            </>
          ))}
        </div>
      </InfoContainer>
    </Container>
  );
};

export default TicketInfoBox;
