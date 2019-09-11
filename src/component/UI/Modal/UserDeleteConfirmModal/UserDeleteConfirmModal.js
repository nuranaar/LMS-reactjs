import React from 'react'
import closeIcon from '../../../../assets/img/loginimg/cancel icon.png';
import './DelConfModal.scss';
import Button from '../../Button/Button';

export default function UserDeleteConfirmModal(props) {
    return (
        <div className={["popups", props.isOpen ? "open" : ""].join(" ")} id={props.id}>
            <div onClick={props.closeModal} className="popup-area"></div>
            <div className="popup ">
                <div className="close" onClick={props.closeModal}>
                    <img src={closeIcon} alt="close" />
                </div>
                <div className="popup-header">
                    <p>İstifadəçini silmək</p>
                </div>
                <p className='modal-desc'>Bu istifadəçini silmək istəyirsinizmi?</p>
                <div className="buttons text-center">
                    <Button class="btn btn-cancel" clicked={props.closeModal} >Ləğv et</Button>
                    <Button class="btn btn-confirm">Silinsin</Button>
                </div>
            </div>
        </div>
    )
}
