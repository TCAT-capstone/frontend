import React, { useState } from 'react';
import { TicketTemplateListType } from '@src/types/ticket';
import { Container, TabWrapper, MenuContainer } from './style';
import Tab from './Tab';
import TemplateMenu from './TemplateMenu';
import TextMenu from './TextMenu';
import TicketInfoMenu from './TicketInfoMenu';

type MenuType = 'ticketInfo' | 'template' | 'text';

interface Props {
  templates: TicketTemplateListType;
}

const SideMenu: React.FC<Props> = ({ templates }) => {
  const [currMenu, setCurrMenu] = useState<MenuType>('ticketInfo');

  return (
    <Container>
      <TabWrapper>
        <Tab currMenu={currMenu} setCurrMenu={setCurrMenu} />
      </TabWrapper>
      <MenuContainer>
        {currMenu === 'ticketInfo' && <TicketInfoMenu />}
        {currMenu === 'template' && <TemplateMenu templates={templates} />}
        {currMenu === 'ticketInfo' && <TextMenu />}
      </MenuContainer>
    </Container>
  );
};

export default SideMenu;
