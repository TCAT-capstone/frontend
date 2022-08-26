import React from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import Router from '@routes/Router';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <RecoilRoot>
    <Router />
    <ToastContainer />
  </RecoilRoot>
);

export default App;
