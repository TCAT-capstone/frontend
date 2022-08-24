import React from 'react';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';

import { TicketListType } from '@src/types/ticket';

import { TabWrapper } from './style';

interface Props {
  isTrend: boolean;
  tickets: TicketListType;
  isLoaded: boolean;
  setTarget: any;
}

const MainTemplate: React.FC<Props> = ({ isTrend, tickets, isLoaded, setTarget }) => {
  return (
    <Layout>
      <TabWrapper>
        <Tab
          firstText="트렌딩"
          secondText="피드"
          firstLink="/"
          secondLink="/feed"
          focus={isTrend ? 'first' : 'second'}
        />
      </TabWrapper>
      <TicketList tickets={tickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={setTarget} />
    </Layout>
  );
};

export default MainTemplate;
