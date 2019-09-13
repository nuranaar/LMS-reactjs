import React from 'react'
import { Route } from 'react-router-dom'
import gradient from '../../assets/img/loginimg/gradient.jpg';
import Header from '../../container/Header/Header';
import SideBar from '../../container/SideBar/SideBar';
import './MainPage.scss'
import ProfilePage from '../ProfilePage/ProfilePage';
import LessonsPage from '../../container/LessonsPage/LessonsPage';
import UserPage from '../UsersPage/UserPage';
import EditUsersProfile from '../../container/Users/EditUsersProfile/EditUsersProfile';

export default function MainPage(props) {
    return (
        <React.Fragment>
            <img className="header-gradient" src={gradient} alt="" />
            <div className="row flex-nowrap">
                <SideBar />
                <main className="col-lg-12  w-100">
                    <Header />
                    <Route path='/profile' render={() => <ProfilePage />} />
                    <Route path='/lessons' render={() => <LessonsPage />} />
                    <Route  path='/users' render={() => <UserPage />} />
                    <Route  path={`/users/:id`} component={EditUsersProfile}  />

                </main>
            </div>
        </React.Fragment>
    )
}
