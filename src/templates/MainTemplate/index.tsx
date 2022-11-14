import React from 'react';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';

import { TicketListType } from '@src/types/ticket';

import { TabWrapper } from './style';

interface Props {
  isTrend: boolean;
  trendTickets: TicketListType;
  feedTickets: TicketListType;
  isLoaded: boolean;
  trendSetTarget: any;
  feedSetTarget: any;
}

const MainTemplate: React.FC<Props> = ({
  isTrend,
  trendTickets,
  feedTickets,
  isLoaded,
  trendSetTarget,
  feedSetTarget,
}) => {
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
      {isTrend ? (
        <TicketList tickets={trendTickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={trendSetTarget} />
      ) : (
        <TicketList tickets={feedTickets} backgroundColor="purple" isLoaded={isLoaded} setTarget={feedSetTarget} />
      )}
    </Layout>
  );
};

export default MainTemplate;
