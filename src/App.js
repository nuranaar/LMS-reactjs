import React from 'react';
import './assets/css/grid.css';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import LoginPages from './component/LoginPages/LoginPages';
import WelcomePages from './component/WelcomePage/WelcomePages';
import MainPage from './component/MainPage/MainPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/welcome-page' render={() => <WelcomePages />} />
        {/* <Route path='/' exact render={() => <MainPage />} /> */}
        <MainPage />
        <LoginPages />
      </Switch>
    </React.Fragment>
  );
}

export default App;