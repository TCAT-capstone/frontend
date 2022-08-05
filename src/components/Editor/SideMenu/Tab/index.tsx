import React from 'react';
import { Container, TabItemWrapper, Line } from './style';

type MenuType = 'ticketInfo' | 'template' | 'text';

interface Props {
  currMenu: MenuType;
  setCurrMenu: React.Dispatch<React.SetStateAction<MenuType>>;
}

const Tab: React.FC<Props> = ({ currMenu, setCurrMenu }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Tab;
