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
import UserRolesPage from '../../container/UserRolesPage/UserRolesPage';
import RoleInfo from '../../container/UserRolesPage/RoleInfo/RoleInfo';

export default function MainPage(props) {
    return (
        <React.Fragment>
            <img className="header-gradient" src={gradient} alt="" />
            <div className="row flex-nowrap">
                <SideBar />
                <main className="col-12">
                    <Header />

                    
                    <Route path='/profile' render={() => <ProfilePage />} />
                    <Route path='/lessons' render={() => <LessonsPage />} />
                    <Route path='/users' render={() => <UserPage />} />
                    <Route path={`/users/:id`} component={EditUsersProfile} />
                    <Route path={`/roles`} exact component={UserRolesPage} />
                    <Route path={`/roles/:roleName`} component={RoleInfo} />

                </main>
            </div>
        </React.Fragment>
    )
}
