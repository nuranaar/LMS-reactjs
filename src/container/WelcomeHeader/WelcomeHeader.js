import React from 'react'
import Icon from '@mdi/react';
import {
    mdiHelpCircleOutline,
    mdiBellOutline,
    mdiAccount,
    mdiTeach,
    mdiSettings,
    mdiAccountTie,
    mdiSchool,
    mdiKeyVariant
} from '@mdi/js';
import logo from '../../assets/img/code_logo.png';
import profilePhoto from '../../assets/img/users/images.jfif';

export default class WelcomeHeader extends React.Component {
    state = {
        isOpen: false,
        rols: [{
            id: 1,
            name: 'teacher',
            icon: mdiTeach,
            title: 'Müəllim'
        },
        {
            id: 2,
            name: 'student',
            icon: mdiSchool,
            title: 'Tələbə'
        },
        {
            id: 3,
            name: 'manager',
            icon: mdiAccountTie,
            title: 'Menecer'
        },
        {
            id: 4,
            name: 'admin',
            icon: mdiKeyVariant,
            title: 'Admin'
        }]
    }
    photoClickHandler = () => {
        this.setState({
            isOpen: true
        })
        console.log("photo",this.state.isOpen);
    }
    overlayClickHandler = () => {
        this.setState({
            isOpen: false
        });
        console.log("overlay",this.state.isOpen);
    }
    roleCLickHandler = (rol) => {
        this.setState({
            selectedRole: rol
        })
    }
    render() {
        let logout = <div id="logout" className={[this.state.isOpen ? "open" : '']}>
            <div className="overlay" onClick={this.overlayClickHandler}></div>
            <div className="profile-actions">
                <div className="user d-flex  align-items-center">

                    <img src={profilePhoto} className="photo" alt="user" />
                    <div className="user-info">
                        <p className="fullname p-1">Vüqar Əli</p>
                        <p className="email p-1">vuqar@code.edu.az</p>
                        <p className="position p-1">Admin</p>
                    </div>
                </div>
                <ul className="segments">
                    <li className="segment d-flex align-items-center">
                        <div className="icon">
                            <Icon path={mdiAccount} className="mdi" size={0.8} />
                        </div>
                        <div className="segment-title"><a href="#"> Profilinə keç</a></div>
                    </li>
                    <li className="segment d-flex align-items-center">
                        <div className="icon">
                            <Icon path={mdiSettings} className="mdi" size={0.8} />
                        </div>
                        <div className="segment-title"><a href="#"> Tənzimləmələr</a></div>
                    </li>
                    {this.state.rols.map(rol => {
                        return <li className="segment d-flex align-items-center" key={rol.id} onClick={() => this.roleCLickHandler(rol.name)}>
                            <div className="icon">
                                <Icon path={rol.icon} className="mdi" size={0.8} />
                            </div>
                            <div className="segment-title" ><a href="#" > {rol.title} hesabım</a></div>
                        </li>;
                    })}
                </ul>
                <button className="btn logout">Hesabdan çıxış</button>
            </div>

        </div >
        return (
            <header className="header">
                <div className="container">
                    <div className="col-2 head-left">
                        <div className="logo">
                            <img className="CA-Copy" src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="col-2 head-right">
                        <div className="search">
                            <a href="#">
                                <Icon
                                    path={mdiHelpCircleOutline}
                                    size={1}
                                    className='mdi' />
                            </a>
                        </div>
                        {/* <div className="notification active">
                            <a href="#noti">
                                <Icon path={mdiBellOutline}
                                    size={1}
                                    className='mdi' />
                            </a>
                        </div> */}
                        <div className="user-photo" onClick={this.photoClickHandler}>
                            <a href="#">
                                <img src={profilePhoto} className="user-pp" alt="user" />
                            </a>
                        </div>
                            {logout}
                    </div>
                </div>
            </header>
        )
    }
}
