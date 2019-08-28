import React, { Component } from 'react';
import infoIcon from '../../assets/img/loginimg/icon info.png';
import Button from '../../component/UI/Button/Button';
import Modal from '../../component/UI/Modal/Modal';
import LoginPages from '../../component/LoginPages/LoginPages';

export default class Fin extends Component {
    state = {
        showModal: false,
        dataTarget: null
    };
    modalContentHandler = (e) => {
        console.log(e.currentTarget.dataset.target)
        this.setState({
            showModal: true,
            dataTarget: e.currentTarget.dataset.target
        })
        e.preventDefault();
        
    }
    modalCloseHandler = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        let modal = <Modal id={this.state.dataTarget} isOpen={this.state.showModal} closeModal={this.modalCloseHandler} sendNote={this.modalContentHandler} />
        return (
            <LoginPages>
                <div className="login">
                    <div className="page-fon text-center">
                        <div className="welcome">
                            <div className="title">
                                <h5>Salam, gulsumfm@code.edu.az!</h5>
                                <p className="info">Email doğrulamasını tamamlamaq üçün, fin kodunuzu daxil edin! </p>
                            </div>
                            <form onSubmit={this.modalContentHandler} className="form" data-target="confirm">
                                <div className="label d-flex align-items-center">
                                    <label htmlFor="email"> Fin kodu daxil edin</label>
                                    <div onClick={this.modalContentHandler} className="fin-info" data-target="fin-info">
                                        <img src={infoIcon} alt="info icon" />
                                    </div>
                                </div>
                                <input type="text" id="email" className="input mt-2 mb-2 input-error" placeholder="Fin" />
                                <div className="error-message">
                                    Fin kodunuzu tapılmadı.
                                </div>
                                <Button class="btn btn-form mt-4">Davam et </Button>
                            </form>
                        </div>
                    </div>
                    {modal}
                </div>
            </LoginPages>
        )
    }
}
