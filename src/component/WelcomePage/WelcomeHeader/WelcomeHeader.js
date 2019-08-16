import React from 'react'
import Icon from '@mdi/react';
import { mdiHelpCircleOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import logo from '../../../assets/img/code_logo.png';

export default function WelcomeHeader() {
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
                    <div className="notification active">
                        <a href="#noti">
                            <Icon path={mdiBellOutline}
                                size={1}
                                className='mdi' />
                        </a>
                    </div>
                    <div className="user-photo">
                        <a href="#">
                            <img src="../img/users/user.jpg" className="user-pp" alt="user" />
                        </a>
                        <div id="logout">
                            <div className="overlay"></div>
                            <div className="profile-actions">
                                <div className="user d-flex  align-items-center">

                                    <img src="../img/users/user.jpg" className="photo" alt="user" />
                                    <div className="user-info">
                                        <p className="fullname p-1">Vüqar Əli</p>
                                        <p className="email p-1">vuqar@code.edu.az</p>
                                        <p className="position p-1">Admin

                                    </p>
                                    </div>
                                </div>
                                <ul className="segments">
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-account"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Profilinə keç</a></div>
                                    </li>
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-teach"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Müəllim hesabım</a></div>
                                    </li>
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-settings"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Tənzimləmələr</a></div>
                                    </li>
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-account-tie"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Menecer hesabım</a></div>
                                    </li>
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-school"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Tələbə hesabım</a></div>
                                    </li>
                                    <li className="segment d-flex align-items-center">
                                        <div className="icon">
                                            <span className="mdi mdi-key-variant"></span>
                                        </div>
                                        <div className="segment-title"><a href="#"> Admin hesabım</a></div>
                                    </li>
                                </ul>
                                <button className="btn logout">Hesabdan çıxış</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
