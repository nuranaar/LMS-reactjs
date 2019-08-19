import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../../container/ProfilePage/ProfilePage';
import gradient from '../../assets/img/loginimg/gradient.jpg';
import Header from '../../container/Header/Header';
import SideBar from '../../container/SideBar/SideBar';


export default function MainPage() {
    return (
        <React.Fragment>
            <img className="header-gradient" src={gradient} alt="" />
            <div className="row flex-nowrap">   
                <SideBar />
                <main className="col-lg-12  w-100">
                <Header />

                    <Switch>
                        <Route path='/profile' component={ProfilePage} />
                        {/* <Route path='/profile/edit' component={ProfilePage} /> */}
                    </Switch>
                </main>
            </div>
        </React.Fragment>
    )
}
