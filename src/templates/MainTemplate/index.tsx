import React from 'react';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';
import help from '@images/help.png';

import { TicketListType } from '@src/types/ticket';

import { TabWrapper, Help } from './style';

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
      <Help
        href="https://atlantic-wasabi-026.notion.site/TCAT-2c32746c1b014c40aea9927c01e5f3fc"
        target="_blank"
        rel="noreferrer"
      >
        <img src={help} alt="link to notion" />
      </Help>
    </Layout>
  );
};

export default MainTemplate;
