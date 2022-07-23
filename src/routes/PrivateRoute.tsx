import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, Outlet } from 'react-router-dom';

import { isLoggedInState } from '@stores/user';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  if (!isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/" replace state={{ error: '로그인이 필요합니다.' }} />;
};

export default PrivateRoute;
