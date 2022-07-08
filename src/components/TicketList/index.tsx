import React from 'react';

import { Container } from './style';
import Ticket from './Ticket';

interface Props {
  backgroundColor: 'purple' | 'white';
}

const TicketList: React.FC<Props> = ({ backgroundColor }) => {
  return (
    <Container>
      {[...Array(30)].map((_, i) => (
        <Ticket
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          title={ticketEx.title}
          likeCount={ticketEx.likeCount}
          memberName={ticketEx.memberName}
          date={ticketEx.date}
          backgroundColor={backgroundColor}
        />
      ))}
    </Container>
  );
};

const ticketEx = {
  title: 'MIKA LIVE IN SEOUL 감동적인 미카 내한공연',
  likeCount: 38,
  memberName: '입장번호 1번',
  date: new Date(),
};

export default TicketList;
