import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import WritePage from '@pages/WritePage';
import HomePage from '@pages/HomePage';
import ProfilePage from '@pages/ProfilePage';
import PostPage from '@pages/PostPage';
import ErrorPage from '@pages/ErrorPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage isTrend />} />
        <Route path="/feed" element={<MainPage isTrend={false} />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:homeId" element={<HomePage />} />
        <Route path="/@:homeId/settings" element={<ProfilePage />} />
        <Route path="/@:homeId/:ticketId" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
