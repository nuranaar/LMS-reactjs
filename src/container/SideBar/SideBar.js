import React from 'react'
import logo from '../../assets/img/code_logo.png';
import Icon from '@mdi/react';
import './SideBar.css';
import {
    mdiHome,
    mdiAccount,
    mdiBookMultiple,
    mdiCashMultiple,
    mdiFrequentlyAskedQuestions,
    mdiHeadset,
} from '@mdi/js';

export default class SideBar extends React.Component {
    state = {
        isOpenSideBar: false
    }
    openSideBarHandler = () => {
        let open = this.state.isOpenSideBar;
        this.setState({
            isOpenSideBar: !open
        })
    }
    render() {
        return (
            <nav className={["menu-bar", this.state.isOpenSideBar === true ? "active" : ''].join(' ')}>
                <div className="logo mb-6">
                    <img className="CA-Copy" src={logo} alt="logo" />

                </div>
                <div className="open-menubar " onClick={this.openSideBarHandler}>
                    {/* <Icon path={mdiMenu} size={1.5} className='mdi' /> */}
                    <div className={["burger-menu", this.state.isOpenSideBar === true ? "active" : ''].join(' ')}></div>
                    {/* <img className="CA-Copy" src={hoverIcon} alt="logo" /> */}

                </div>
                <ul className="nav-list">
                    <li className="nav-item  d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiHome} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">Əsas səhifə</p>
                        </a>
                    </li>
                    <li className="nav-item active d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiAccount} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">Profil</p>
                        </a>
                    </li>
                    <li className="nav-item  d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiBookMultiple} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">Dərslər</p>
                        </a>
                    </li>
                    <li className="nav-item  d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiCashMultiple} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">Ödənişlər</p>
                        </a>
                    </li>
                    <li className="nav-item  d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiFrequentlyAskedQuestions} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">FAQ</p>
                        </a>
                    </li>
                    <li className="nav-item  d-flex align-items-center justify-content-start ">
                        <div className="icon">
                            <Icon path={mdiHeadset} size={1.2} className='mdi' />
                        </div>
                        <a href="#">
                            <p className="nav-text">Helpdesk</p>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
