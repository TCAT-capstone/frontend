import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MainTemplate from '@templates/MainTemplate';

const MainPage: React.FC = () => {
  const location = useLocation();
  const [isTrend, setIsTrend] = useState(true);

  useEffect(() => {
    if (location.pathname === '/feed') setIsTrend(false);
    else setIsTrend(true);
  }, [location]);

  return <MainTemplate isTrend={isTrend} />;
};

export default MainPage;
