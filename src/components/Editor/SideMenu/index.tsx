import React, { useState } from 'react';

import { Container, TabContainer, TabItemWrapper, Line } from './style';

type menuType = 'ticketInfo' | 'template' | 'text';

const SideMenu: React.FC = () => {
  const [currMenu, setCurrMenu] = useState<menuType>('ticketInfo');

  return (
    <Container>
      <TabContainer>
        <TabItemWrapper
          focus={currMenu === 'ticketInfo'}
          onClick={() => {
            setCurrMenu('ticketInfo');
          }}
        >
          <span>티켓정보</span>
        </TabItemWrapper>
        <TabItemWrapper
          focus={currMenu === 'template'}
          onClick={() => {
            setCurrMenu('template');
          }}
        >
          <span>템플릿</span>
        </TabItemWrapper>
        <TabItemWrapper
          focus={currMenu === 'text'}
          onClick={() => {
            setCurrMenu('text');
          }}
        >
          <span>텍스트</span>
        </TabItemWrapper>
        <Line currMenu={currMenu} />
      </TabContainer>
      {currMenu === 'ticketInfo' && <TicketInfoMenu />}
      {currMenu === 'template' && <TemplateMenu />}
      {currMenu === 'ticketInfo' && <TextMenu />}
    </Container>
  );
};

const TicketInfoMenu: React.FC = () => {
  return <div />;
};

const TemplateMenu: React.FC = () => {
  return <div />;
};
const TextMenu: React.FC = () => {
  return <div />;
};

export default SideMenu;
