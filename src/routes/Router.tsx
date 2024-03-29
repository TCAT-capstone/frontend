import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import PostPage from '@pages/PostPage';
import WritePage from '@pages/WritePage';
import ProfilePage from '@pages/ProfilePage';
import TicketbookPage from '@pages/TicketbookPage';
import ErrorPage from '@pages/ErrorPage';
import OAuthRedirectPage from '@pages/OAuthRedirectPage';
import NewPage from '@pages/Editor/NewPage';
import EditPage from '@pages/Editor/EditPage';
import SearchPage from '@pages/SearchPage';

import { ACCESS_TOKEN } from '@utils/constants';
import useGetUserInfo from '@hooks/useGetUserInfo';

import PrivateRoute from './PrivateRoute';
import RegisterRoute from './RegisterRoute';

const Router: React.FC = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const { getUserInfo } = useGetUserInfo(token);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterRoute />}>
          <Route path="" element={<MainPage isTrend />} />
          <Route path="feed" element={<MainPage isTrend={false} />} />
          <Route path="@:homeId" element={<HomePage />} />
          <Route path="@:homeId/:ticketId" element={<PostPage />} />
          <Route path="oauth2/redirect" element={<OAuthRedirectPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="write" element={<WritePage />} />
            <Route path="editor/new" element={<NewPage />} />
            <Route path="editor/edit" element={<EditPage />} />
            <Route path="@:homeId/profile" element={<ProfilePage />} />
            <Route path="@:homeId/ticketbook" element={<TicketbookPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
