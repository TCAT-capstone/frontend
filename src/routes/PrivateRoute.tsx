import React from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';

import { isLoggedInState } from '@stores/user';
import ErrorPage from '@pages/ErrorPage';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return isLoggedIn ? <Outlet /> : <ErrorPage />;
};

export default PrivateRoute;
