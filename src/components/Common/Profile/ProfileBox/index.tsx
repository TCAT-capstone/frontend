import React from 'react';

import Like from '@components/Common/Like';
import TicketIcon from '@images/ticket.svg';
import ProfileIcon from '../ProfileIcon';

import { Container, CountContainer } from './style';

interface Props {
  name: string;
  bio: string;
  ticketCount: number;
  likeCount: number;
}

const ProfileBox: React.FC<Props> = ({ name, bio, ticketCount, likeCount }) => {
  return (
    <Container>
      <ProfileIcon size={9.375} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <CountContainer>
        <div>
          <img src={TicketIcon} alt="티켓 아이콘" />
          <span>{ticketCount}</span>
        </div>
        <div>
          <Like size={1.125} fill={false} />
          <span>{likeCount}</span>
        </div>
      </CountContainer>
    </Container>
  );
};

export default ProfileBox;
