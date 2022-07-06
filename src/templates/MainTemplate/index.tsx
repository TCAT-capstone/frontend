import React from 'react';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';

import { TabWrapper } from './style';

interface Props {
  isTrend: boolean;
}

const MainTemplate: React.FC<Props> = ({ isTrend }) => {
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
      <TicketList />
    </Layout>
  );
};

export default MainTemplate;
