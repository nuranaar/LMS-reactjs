import React from 'react'
import Rol from '../../component/Rol/Rol';
import { Redirect } from 'react-router-dom';
import LoginPages from '../../component/LoginPages/LoginPages';

export default class RolsSegmentation extends React.Component {
    state = {
        rols: ['teacher', 'student', 'manager', 'admin'],
        selectedRole: null
    }

    roleCLickHandler = (rol) => {
        this.setState({
            selectedRole: rol
        })
    }

    render() {

        let content;

        if (!this.state.selectedRole) {
            content = <div id="segmentations">
                <div className="title">
                    İstifadəçi hesabını seçin
                </div>
                <div className="segments row text-center justify-content-center ">

                    {this.state.rols.map(rol => {
                        return <Rol clicked={() => this.roleCLickHandler(rol)} title={rol} />;
                    })}
                </div>
            </div>
        }
        else {
            content = <div>
                <Redirect to={
                    { pathname: "/welcome-page" }
                }></Redirect>
            </div>
        }
        return (
            <LoginPages>
                {content}
            </LoginPages>
        )
    }
}