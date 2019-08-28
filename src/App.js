import React from 'react';
import './assets/css/grid.css';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Login from './container/Login/Login';
import Fin from './container/Fin/Fin';
import Thanks from './component/Thanks/Thanks';
import RolsSegmentation from './container/RolsSegmentation/RolsSegmentation';
import WelcomePages from './component/WelcomePage/WelcomePages';
import MainPage from './component/MainPage/MainPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/home' render={() => <WelcomePages />} />
        {/* login */}
        <Route path='/signup' render={() => <Login info='Google ilə qeydiyyatdan keç' />} />
        <Route path='/login' render={() => <Login info='Google ilə daxil ol' />} />
        <Route path='/fin' render={() => <Fin />} />
        <Route path='/thanks' render={() => <Thanks />} />
        <Route path='/rols' render={() => <RolsSegmentation />} />
        {/* MainPage */}
        <Route path='/' render={() => <MainPage />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;