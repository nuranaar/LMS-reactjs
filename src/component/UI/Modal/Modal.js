import React from 'react'
// import React, { Component } from 'react'
import Button from '../../../component/UI/Button/Button';
import closeIcon from '../../../assets/img/loginimg/cancel icon.png';
import userPhoto from '../../../assets/img/users/user.jpg';
import oldID from '../../../assets/img/kohne shexsiyyet vesiqesi.jpg';
import newID from '../../../assets/img/yeni shexsiyyet.jpg';
import thanks from '../../../assets/img/loginimg/thanks image.jpg';
import '';


export default function Modal(props) {
    // export default class Modal extends Component {
    // render() {
    let close = <div className="close" onClick={props.closeModal}>
        <img src={closeIcon} alt="close" />
    </div>;
    let modalBody = null;
    let modalTitle = null;
    let modalCloseBtn = false;
    switch (props.id) {
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
                    <p className="note-info">Əgər şəxsi məlumatda dəyişiklik etmək istəyirsinizsə bizə <span data-target="send-note" onClick={props.sendNote}
                        className="send-note">bildiriş göndərin.</span> </p>
                </div>
            </div>;
            break;
        case ("send-note"):
            modalTitle = 'Bildiriş';
            modalCloseBtn = true;
            modalBody = <div className="popup-body">
                <p className="info">Əgər şəxsi məlumatda dəyişiklik etmək istəyirsinizsə bizə bildiriş göndərin.</p>
                <form className="form">
                    <label className="label" htmlFor="note">Qeyd</label>
                    <textarea name="note" id="note" cols="30" rows="5" placeholder="Qeydinizi yazın"></textarea>
                    <Button class="btn btn-form">
                        Göndər
                        </Button>
                </form>
            </div>;
            break;
        case ("thanks-popup"):
            modalCloseBtn = false;
            modalBody = <div className="popup-body">
                <div className="image text-center">
                    <img src={thanks} alt="thanks" />
                </div>
                <p className="info">Etdiyiniz dəyişikliklə bağlı qısa zamanda sizə məlumat gələcək.</p>
                <Button clicked={props.closeModal} class="btn btn-close">Bağla</Button>
            </div>;
            break;
        case ("send-note-change"):
            modalTitle = 'Səbəb';
            modalCloseBtn = true;
            modalBody = <div className="popup-body">
                <p className="info">Şəxsi məlumatda etdiyiniz dəyişikliklə bağlı bizə səbəb yazin.</p>
                <form className="form" onSubmit={props.sendNote} data-target='thanks-popup'>
                    <label className="label" htmlFor="note">Səbəb</label>
                    <textarea name="note" id="note" cols="30" rows="5" placeholder="Qeydinizi yazın"></textarea>
                    <div className="buttons">
                        <Button class="btn btn-confirm">Göndər</Button>
                    </div>
                </form>
            </div>;
            break;
        case ("fin-info"):
            modalTitle = 'Fin kod';
            modalCloseBtn = true;
            modalBody = <div className="popup-body">
                <p className="popup-text">
                    Şəxsiyyət vəsiqənizin FİN kodu vəsiqənin aşağı sağ küncündə sonuncu rəqəmdən əvvəlki 7 işarədir.
                    Daha aydın bilməniz üçün nümunə şəkilə diqqət edin!
            </p>
                <div className="examples text-center">
                    <div className="ex-img1">
                        <img src={oldID} alt="kohne shexsiyyet vesiqesi" />
                        <p className="ex-info">Kohne shexsiyyet vesiqesi</p>
                    </div>
                    <div className="ex-img2">
                        <img src={newID} alt="yeni shexsiyyet vesiqesi" />
                        <p className="ex-info">Yeni shexsiyyet vesiqesi</p>
                    </div>
                </div>
            </div>;
            break;
        default:
            modalBody = null;
            break;
    }
    return (
        <div className={["popups", props.isOpen ? "open" : ""].join(" ")} id={props.id}>
            <div onClick={props.closeModal} className="popup-area"></div>
            <div className="popup ">
                {modalCloseBtn ? close : ""}
                {modalTitle === null ? "" :
                    <div className="popup-header">
                        <p>{modalTitle}</p>
                    </div>}
                {modalBody}
            </div>
        </div>
    )
    // }
}

