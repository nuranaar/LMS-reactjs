import React from 'react'
import gradient from '../../assets/img/loginimg/gradient.jpg'; 
import { Route, Switch } from 'react-router-dom';
import Login from '../../container/Login/Login';
import Fin from '../../container/Fin/Fin';
import Thanks from '../Thanks/Thanks';
import RolsSegmentation from '../../container/RolsSegmentation/RolsSegmentation';

export default function LoginPages() {
    return (
        <main className="container">
                <Switch>
                    <Route path='/signup' render={() => <Login info='Google ilə qeydiyyatdan keç' />} />
                    <Route path='/login' exact render={() => <Login info='Google ilə daxil ol' />} />
                    <Route path='/fin' render={() => <Fin />} />
                    <Route path='/thanks' render={() => <Thanks />} />
                    <Route path='/rols' render={() => <RolsSegmentation />} />
                </Switch>
            <img className='gradient' src={gradient} alt="gradient" />
        </main>
    )
}
