import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from '@routes/Router';

const App: React.FC = () => (
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

export default App;
