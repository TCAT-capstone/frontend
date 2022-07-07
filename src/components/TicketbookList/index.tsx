import React from 'react';

import Ticketbook from './Ticketbook';
import { Container } from './style';

const TicketbookList: React.FC = () => {
  return (
    <Container>
      <Ticketbook color="PURPLE" title="뮤지컬💥" date="22.03.04~22.09.09" />
      <Ticketbook color="GREEN" title="뮤지컬💥" date="22.03.04~22.09.09" />
      <Ticketbook color="BLUE" title="뮤지컬💥" date="22.03.04~22.09.09" />
      <Ticketbook color="RED" title="뮤지컬💥" date="22.03.04~22.09.09" />
    </Container>
  );
};

export default TicketbookList;
