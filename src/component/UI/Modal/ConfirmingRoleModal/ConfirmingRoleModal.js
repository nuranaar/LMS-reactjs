import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiClose, mdiCheckBold } from '@mdi/js'
import Button from '../../Button/Button'
import "./ConfirmingRoleModal.scss"

export default class ConfirmingRoleModal extends Component {
    state = {
        roles: [
            {
                key: 2,
                text: 'Müəllim',
                active: false
            },
            {
                key: 3,
                text: 'Menecer',
                active: true
            },
            {
                key: 5,
                text: 'Admin',
                active: false
            }
        ],
        operations: [
            {
                key: 2,
                text: 'Redaktə etsin',
                active: false
            },
            {
                key: 3,
                text: 'Yaratsın',
                active: true
            },
            {
                key: 5,
                text: 'Silsin',
                active: false
            }
        ],
    }
    render() {
        return (
            <div className={["popups", this.props.isOpen ? "open" : ""].join(" ")}>
                <div onClick={this.props.closeModal} className="popup-area"></div>
                <div className="popup ">
                    <div className="close" onClick={this.props.closeModal}>
                        <Icon path={mdiClose} className="close" size={.8} />
                    </div>
                    <div className="popup-header">
                        <p>Profil imtiyazı təsdiq edən rol seç</p>
                    </div>
                    <div className='popup-body'>
                        <p className='label'>Hansı seçim üzrə təsdiq olsun?</p>
                        <div className='confirming-operations'>
                            {this.state.operations.map(oper => {
                                return <div className='check' key={oper.key}>
                                    <label htmlFor={oper.text}>
                                        <input type='checkbox' id={oper.text} style={{ 'display': 'none' }} onChange={oper.change} />
                                        <div className='checkbox'>
                                            <Icon className='mdi' path={mdiCheckBold} size={.45} />
                                        </div>
                                        {oper.text}
                                    </label>
                                </div>
                            })}
                        </div>
                        <p className='label'>Təsdiq edən rol</p>
                        <div className='confirming-roles'>
                        {this.state.roles.map(role => {
                                return <div className='check' key={role.key}>
                                    <label htmlFor={role.text}>
                                        <input type='checkbox' id={role.text} style={{ 'display': 'none' }} onChange={role.change} />
                                        <div className='checkbox'>
                                            <Icon className='mdi' path={mdiCheckBold} size={.45} />
                                        </div>
                                        {role.text}
                                    </label>
                                </div>
                            })}
                        </div>
                        <label className='label'>Təsdiq edən istifadəçi</label>
                    </div>
                    <div className="buttons text-center">
                        <Button class="btn btn-add-user">Əlavə et</Button>
                    </div>
                </div>
            </div>
        )
    }
}
