import React from 'react';

import { TicketListType } from '@src/types/ticket';

import { Container, SpinnerWrapper } from './style';
import Ticket from './Ticket';
import Spinner from '../Common/Spinner';

interface Props {
  tickets: TicketListType;
  backgroundColor: 'purple' | 'white';
  isLoaded: boolean;
  setTarget: any;
}

const TicketList: React.FC<Props> = ({ tickets, backgroundColor, isLoaded, setTarget }) => {
  return (
    <Container>
      {tickets.map((t) => (
        <Ticket
          key={`ticket${t.ticketId}`}
          link={`/@${t.homeId}/${t.ticketId}`}
          ticketImg={t.ticketImg}
          title={t.title}
          likeCount={t.likeCount}
          memberName={t.memberName}
          date={new Date(t.date)}
          backgroundColor={backgroundColor}
        />
      ))}
      <SpinnerWrapper ref={setTarget}>{isLoaded && <Spinner size={3} />}</SpinnerWrapper>
    </Container>
  );
};

export default TicketList;
