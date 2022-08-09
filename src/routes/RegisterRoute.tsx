import React from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';

import { isLoggedInState, userProfileState } from '@stores/user';
import RegisterPage from '@pages/RegisterPage';

const RegisterRoute: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { homeId } = useRecoilValue(userProfileState);

  return isLoggedIn && homeId !== '' ? <RegisterPage /> : <Outlet />;
};

export default RegisterRoute;
