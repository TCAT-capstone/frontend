import React from 'react';
import { Link } from 'react-router-dom';

import Like from '@components/Common/Like';
import { getDateString } from '@utils/string';

import { Container, TicketImage, InfoContainer, SubInfoContainer, LikeContainer } from './style';

interface Props {
  link: string;
  ticketImg: string;
  title: string;
  likeCount: number;
  memberName: string;
  date: Date;
  backgroundColor: 'purple' | 'white';
}

const Ticket: React.FC<Props> = ({ link, ticketImg, title, likeCount, memberName, date, backgroundColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Link to={link}>
        <TicketImage src={ticketImg} alt="티켓 사진" />
        <InfoContainer>
          <h2>{title}</h2>
          <SubInfoContainer>
            <LikeContainer>
              <span>{likeCount}</span>
              <Like size={1} fill={false} />
            </LikeContainer>
            <span>{memberName}</span>
            <span>{getDateString(date)}</span>
          </SubInfoContainer>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default Ticket;
