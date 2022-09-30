import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { ACCESS_TOKEN } from '@utils/constants';
import useGetUserInfo from '@hooks/useGetUserInfo';

const OAuthRedirectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const error = searchParams.get('error');
  const { getUserInfo } = useGetUserInfo(token);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return <Navigate to="/" replace />;
  }
  return <Navigate to="/" replace state={{ error }} />;
};

export default OAuthRedirectPage;
