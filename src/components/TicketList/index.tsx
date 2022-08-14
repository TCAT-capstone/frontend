import React from 'react';

import { TicketListResType } from '@src/types/ticket';

import { Container } from './style';
import Ticket from './Ticket';

interface Props {
  tickets: TicketListResType;
  backgroundColor: 'purple' | 'white';
}

const TicketList: React.FC<Props> = ({ tickets, backgroundColor }) => {
  return (
    <Container>
      {tickets.map((t) => (
        <Ticket
          key={t.ticketId}
          link={`/~${t.homeId}/${t.ticketId}`}
          ticketImg={t.ticketImg}
          title={t.title}
          likeCount={t.likeCount}
          memberName={t.memberName}
          date={new Date(t.date)}
          backgroundColor={backgroundColor}
        />
      ))}
    </Container>
  );
};

export default TicketList;
