import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from '../../components/Topbar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div data-testid="app">
    <Router>
      <TopBar />
      <Routes />
    </Router>
  </div>
);

export default App;