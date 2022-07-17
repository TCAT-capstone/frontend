import React from 'react';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';

import { TicketListResType } from '@src/types/ticket';

import { TabWrapper } from './style';

interface Props {
  isTrend: boolean;
  tickets: TicketListResType;
}

const MainTemplate: React.FC<Props> = ({ isTrend, tickets }) => {
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
      <TicketList tickets={tickets} backgroundColor="purple" />
    </Layout>
  );
};

export default MainTemplate;
