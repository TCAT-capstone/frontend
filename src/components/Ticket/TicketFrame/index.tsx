import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import TicketImage from '@components/Ticket/TicketImage';

import { Container, InfoContainer } from './style';

const TicketFrame: React.FC = () => {
  return (
    <Link to="/">
      <Container>
        <TicketImage />
        <InfoContainer>
          <b>MIKA LIVE IN SEOUL 감동적인 미카 내한공연</b>
          {/* 좋아요, 입장번호, 일시 추가 */}
        </InfoContainer>
      </Container>
    </Link>
  );
};

export default TicketFrame;
