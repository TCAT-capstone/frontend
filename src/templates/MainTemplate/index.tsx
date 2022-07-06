import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '@styles/Layout';
import Tab from '@components/Common/Tab';
import TicketList from '@components/TicketList';

import { TabWrapper } from './style';

const MainTemplate: React.FC = () => {
  const location = useLocation();
  const [isTrend, setIsTrend] = useState(true);

  useEffect(() => {
    if (location.pathname === '/feed') setIsTrend(false);
    else setIsTrend(true);
  }, [location]);

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
