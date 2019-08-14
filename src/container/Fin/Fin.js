import React, { Component } from 'react';
import infoIcon from '../../assets/img/loginimg/icon info.png';
import Button from '../../component/UI/Button/Button';
import Modal from '../../component/UI/Modal/Modal';
import userPhoto from '../../assets/img/users/user.jpg';
import oldID from '../../assets/img/kohne shexsiyyet vesiqesi.jpg';
import newID from '../../assets/img/yeni shexsiyyet.jpg';

export default class Fin extends Component {
    state = {
        showModal: false,
        dataTarget: null
    };
    modalContentHandler = (e) => {
        this.setState({
            showModal: true,
            dataTarget: e.currentTarget.dataset.target
        })
        e.preventDefault();
    }
    render() {
        let displayStyle = {
            display: 'none'
        }
        if (this.state.showModal) {
            displayStyle = {
                display: 'flex'
            }
        }
        let modalBody = null;
        let modalTitle = null;
        let modalCloseBtn = false;
        switch (this.state.dataTarget) {
            case ("confirm"):
                modalTitle = 'Hesabınızı təsdiq edin';
                modalBody = <div className="popup-body">
                    <div className="profile-photo">
                        <img src={userPhoto} alt="user" />
                    </div>
                    <ul className="user-info-list">
                        <li className="user-info-item">
                            <p className="data">Ad, Soyad, Ata adı:</p>
                            <p className="value">Gülsüm Məmmədova, Fizuli q</p>
                        </li>
                        <li className="user-info-item">
                            <p className="data">Doğum tarixi:</p>
                            <p className="value">13.08.1992</p>
                        </li>
                        <li className="user-info-item">
                            <p className="data">Telefon nömrəsi:</p>
                            <p className="value">0517603182</p>
                        </li>
                        <li className="user-info-item">
                            <p className="data">Email:</p>
                            <p className="value">gulsumfm@code.edu.az</p>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <Button class="btn btn-back">Geri dön</Button>
                        <Button class="btn btn-confirm">Təsdiq et</Button>
                    </div>
                    <div className="confirm-note">
                        <p className="note-title">Məlumata düzəliş et!</p>
                        <p className="note-info">Əgər şəxsi məlumatda dəyişiklik etmək istəyirsinizsə bizə <span data-target="send-note" onClick={this.modalContentHandler}
                            className="send-note">bildiriş göndərin.</span> </p>
                    </div>
                </div>;
                break;
            case ("send-note"):
                modalTitle='Bildiriş';
                modalCloseBtn=true;
                modalBody = <div className="popup-body">
                    <p className="info">Əgər şəxsi məlumatda dəyişiklik etmək istəyirsinizsə bizə bildiriş göndərin.</p>
                    <form className="form">
                        <label className="label" htmlFor="note">Qeyd</label>
                        <textarea name="note" id="note" cols="30" rows="5" placeholder="Qeydinizi yazın"></textarea>
                        <Button class="btn btn-form">Göndər</Button>
                    </form>
                </div>;
                break;
            case ("fin-info"):
                modalTitle='Fin kod';
                modalCloseBtn=true;
                modalBody = <div className="popup-body">
                <p className="popup-text">
                    Şəxsiyyət vəsiqənizin FİN kodu vəsiqənin aşağı sağ küncündə sonuncu rəqəmdən əvvəlki 7 işarədir.
                    Daha aydın bilməniz üçün nümunə şəkilə diqqət edin!
                </p>
                <div className="examples text-center">
                    <div className="ex-img1">
                        <img src={oldID} alt="kohne shexsiyyet vesiqesi"/>
                        <p className="ex-info">Kohne shexsiyyet vesiqesi</p>
                    </div>
                    <div className="ex-img2">
                        <img src={newID} alt="yeni shexsiyyet vesiqesi"/>
                        <p className="ex-info">Yeni shexsiyyet vesiqesi</p>
                    </div>
                </div>
            </div>;
                break;
            default: modalBody = null;

        }

        let modal = <Modal id={this.state.dataTarget} style={displayStyle} title={modalTitle} closeBtn={modalCloseBtn}>
            {modalBody}
        </Modal>


        return (
            <div className="login">
                <div className="page-fon text-center">
                    <div className="welcome">
                        <div className="title">
                            <h5>Salam, gulsumfm@code.edu.az!</h5>
                            <p className="info">Email doğrulamasını tamamlamaq üçün, fin kodunuzu daxil edin!
                            </p>
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

        )
    }
}
