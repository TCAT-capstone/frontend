import React from 'react';
import { Link } from 'react-router-dom';

import ticketImg from '@images/sample-ticket-img.png';
import Like from '@components/Common/Like';

import { Container, TicketImage, InfoContainer, SubInfoContainer, LikeContainer } from './style';

interface Props {
  title: string;
  likeCount: number;
  memberName: string;
  date: Date;
  backgroundColor: 'purple' | 'white';
}

const Ticket: React.FC<Props> = ({ title, likeCount, memberName, date, backgroundColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Link to="/">
        <TicketImage src={ticketImg} alt="티켓 사진" />
        <InfoContainer>
          <h2>{title}</h2>
          <SubInfoContainer>
            <LikeContainer>
              <span>{likeCount}</span>
              <Like size={1} fill={false} />
            </LikeContainer>
            <span>{memberName}</span>
            <span>{`${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date
              .getDate()
              .toString()
              .padStart(2, '0')}`}</span>
          </SubInfoContainer>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default Ticket;
