import React from 'react'
import Button from '../../Button/Button';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function RoleEditModal(props) {
    return (
        <div className={["popups", props.isOpen ? "open" : ""].join(" ")}>
            <div onClick={props.closeModal} className="popup-area"></div>
            <div className="popup ">
                <div className="close" onClick={props.closeModal}>
                    <Icon path={mdiClose} className="close" size={.8} />
                </div>
                <div className="popup-header">
                    <p>{props.rol.label} rolunu redaktə etmək</p>
                </div>
                <div className='popup-body'>
                    <label>
                        Rolun adı
                    </label>
                    <input type='text' defaultValue={props.rol.label} />
                    <p>Icon</p>
                    <div className='icon-set'>
                        <div className='item'><Icon path={props.rol.path} fill={props.rol.fill} size={1.5} className='mdi' /></div>
                    </div>

                </div>
                <div className="buttons text-center">
                    <Button class="btn btn-cancel" clicked={props.closeModal} >Ləğv et</Button>
                    <Button class="btn btn-confirm">Yadda saxla</Button>
                </div>
            </div>
        </div>
    )
}
