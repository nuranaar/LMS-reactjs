import React from 'react'
import './DelConfModal.scss';
import Button from '../../Button/Button';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function UserDeleteConfirmModal(props) {
    return (
        <div className={["popups", props.isOpen ? "open" : ""].join(" ")}>
            <div onClick={props.closeModal} className="popup-area"></div>
            <div className="popup ">
                <div className="close" onClick={props.closeModal}>
                <Icon path={mdiClose} className="close" size={.8}  />
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
