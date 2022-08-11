import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { userProfileState } from '@stores/user';
import { getMyProfile } from '@apis/member';
import { ACCESS_TOKEN } from '@utils/constants';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import PostPage from '@pages/PostPage';
import WritePage from '@pages/WritePage';
import ProfilePage from '@pages/ProfilePage';
import ErrorPage from '@pages/ErrorPage';
import OAuthRedirectPage from '@pages/OAuthRedirectPage';
import NewPage from '@pages/Editor/NewPage';
import EditPage from '@pages/Editor/EditPage';
import SearchPage from '@pages/SearchPage';

import PrivateRoute from './PrivateRoute';

const Router: React.FC = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const setUserProfile = useSetRecoilState(userProfileState);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage isTrend />} />
        <Route path="/feed" element={<MainPage isTrend={false} />} />
        <Route path="/@:homeId" element={<HomePage />} />
        <Route path="/@:homeId/:ticketId" element={<PostPage />} />
        <Route path="/oauth2/redirect" element={<OAuthRedirectPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/write" element={<WritePage />} />
          <Route path="/editor/new" element={<NewPage />} />
          <Route path="/editor/edit" element={<EditPage />} />
          <Route path="/@:homeId/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
