import React from 'react';
import { TicketbookType } from '@src/types/ticketbook';
import Ticketbook from '../Ticketbook';
import { Container } from './style';

interface Props {
  currTicketbook: TicketbookType;
}

const TicketbookEditor: React.FC<Props> = ({ currTicketbook }) => {
  return (
    <Container>
      <Ticketbook
        backgroundImg={currTicketbook.ticketbookImg as string}
        name={currTicketbook.name}
        description={currTicketbook.description}
        size="small"
      />
    </Container>
  );
};

export default TicketbookEditor;
