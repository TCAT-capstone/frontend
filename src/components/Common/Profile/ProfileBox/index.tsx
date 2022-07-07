import React from 'react';

import Like from '@components/Common/Like';
import TicketIcon from '@images/ticket.svg';
import ProfileIcon from '../ProfileIcon';

import { Container, CountContainer } from './style';

const ProfileBox: React.FC = () => {
  return (
    <Container>
      <ProfileIcon size={9.375} />
      <h2>입장번호 1번</h2>
      <p>황금시대의 동력은 고동을 군영과 황금시대다. 대한 이상을 구하기 그들의 가치를 가진 살 위하여서.</p>
      <CountContainer>
        <div>
          <img src={TicketIcon} alt="티켓 아이콘" />
          <span>41</span>
        </div>
        <div>
          <Like size={1.125} fill={false} />
          <span>718</span>
        </div>
      </CountContainer>
    </Container>
  );
};

export default ProfileBox;
