import React, { useState } from 'react';

import { Container, TabWrapper, MenuContainer } from './style';
import Tab from './Tab';
import TemplateMenu from './TemplateMenu';
import TextMenu from './TextMenu';
import TicketInfoMenu from './TicketInfoMenu';

type MenuType = 'ticketInfo' | 'template' | 'text';

const SideMenu: React.FC = () => {
  const [currMenu, setCurrMenu] = useState<MenuType>('ticketInfo');

  return (
    <Container>
      <TabWrapper>
        <Tab currMenu={currMenu} setCurrMenu={setCurrMenu} />
      </TabWrapper>
      <MenuContainer>
        {currMenu === 'ticketInfo' && <TicketInfoMenu />}
        {currMenu === 'template' && <TemplateMenu />}
        {currMenu === 'ticketInfo' && <TextMenu />}
      </MenuContainer>
    </Container>
  );
};

export default SideMenu;
