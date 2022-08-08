import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { ACCESS_TOKEN } from '@utils/constants';
import { useSetRecoilState } from 'recoil';
import { userProfileState } from '@src/stores/user';
import { getMyProfile } from '@src/apis/member';

const OAuthRedirectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const setUserProfile = useSetRecoilState(userProfileState);

  const token = searchParams.get('token');
  const error = searchParams.get('error');

  const getUser = async () => {
    if (token) {
      const profile = await getMyProfile();
      if (profile) {
        setUserProfile(profile);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return <Navigate to="/" replace />;
  }
  return <Navigate to="/" replace state={{ error }} />;
};

export default OAuthRedirectPage;
