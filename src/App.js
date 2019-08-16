import React from 'react';
import './assets/css/grid.css';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import LoginPages from './component/LoginPages/LoginPages';
import WelcomePages from './component/WelcomePage/WelcomePages';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact render={() => <LoginPages />} />
        <Route path='/welcome-page' render={() => <WelcomePages />} />
      </Switch>
    </React.Fragment>



  );
}

export default App;