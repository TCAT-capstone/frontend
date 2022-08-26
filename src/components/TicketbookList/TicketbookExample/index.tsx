import React from 'react';

import TicketbookList from '../index';
import Ticketbook from '../Ticketbook';

const TicketbookExample: React.FC = () => {
  return (
    <TicketbookList>
      <Ticketbook backgroundImg="0" color="PURPLE" title="1️⃣" date="💎" />
      <Ticketbook backgroundImg="1" color="GREEN" title="2️⃣" date="FATAL LOVE" />
      <Ticketbook backgroundImg="2" color="BLUE" title="3️⃣" date="DEATH NOTE" />
      <Ticketbook backgroundImg="3" color="RED" title="4️⃣" date="ARENA" />
      <Ticketbook backgroundImg="4" color="GREEN" title="5️⃣" date="TAEMIN" />
      <Ticketbook backgroundImg="5" color="PURPLE" title="6️⃣" date="IVE" />
      <Ticketbook backgroundImg="6" color="RED" title="7️⃣" date="MUSICAL" />
      <Ticketbook backgroundImg="7" color="BLUE" title="8️⃣" date="DIVE INTO IVE" />
    </TicketbookList>
  );
};

export default TicketbookExample;
