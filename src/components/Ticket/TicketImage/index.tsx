import React from 'react';

import ticketImg from '@images/sample-ticket-img.png';

import { Image } from './style';

const TicketImage: React.FC = () => {
  return <Image src={ticketImg} alt="티켓 사진" />;
};

export default TicketImage;
