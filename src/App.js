import React from 'react';
import './App.css';
import './assets/css/grid.css';
import gradient from './assets/img/loginimg/gradient.jpg';

import Login from './container/Login/Login';

import { Route, Switch } from 'react-router-dom';
import Fin from './container/Fin/Fin';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path='/signup' render={() => <Login info='Google ilə qeydiyyatdan keç' />} />
        <Route path='/login' render={() => <Login info='Google ilə daxil ol' />} />
        <Route path='/fin' render={() => <Fin />} />
    </Switch>
        <img className='gradient' src={gradient} alt="gradient" />
      </main>

  );
}

export default App;