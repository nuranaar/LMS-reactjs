import React, { Component } from 'react'
import googleLogo from '../../assets/img/loginimg/google-logo.png';
import Button from '../../component/UI/Button/Button';
import LoginPages from '../../component/LoginPages/LoginPages';

export default class Login extends Component {
    render() {
        return (
            <LoginPages>
                <div className=" login">
                    <div className="page-fon text-center">
                        <div className="welcome">
                            <div className="title">
                                <h5>Salam, LMS-ə xoş gəlmisiniz!</h5>
                                {/* İlk dəfə qeydiyyatda "Google ilə qeydiyyatdan keç" yazsın.
                            Daha sonra daxil olanda isə "Google ilə daxil ol" yazsın.  */}
                                <p className="info">{this.props.info}</p>
                            </div>
                            <form className="form ">
                                <Button class="btn btn-form "> <img src={googleLogo} alt="" className="icon" /> Google ile davam edin </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </LoginPages>
        )
    }
}
