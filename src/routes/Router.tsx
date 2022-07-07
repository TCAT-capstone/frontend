import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feed" element={<MainPage />} />
        <Route path="/@:homeId" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
