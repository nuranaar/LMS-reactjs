import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiClose, mdiCheckBold, mdiPlus } from '@mdi/js'
import Button from '../../Button/Button'
import "./ConfirmingRoleModal.scss"

export default class ConfirmingRoleModal extends Component {
    state = {
        roles: [
            {
                id: 2,
                text: 'Müəllim',
                active: false
            },
            {
                id: 3,
                text: 'Menecer',
                active: false
            },
            {
                id: 5,
                text: 'Admin',
                active: false
            }
        ],
        operations: [
            {
                id: 2,
                text: 'Redaktə etsin',
                active: false
            },
            {
                id: 3,
                text: 'Yaratsın',
                active: false
            },
            {
                id: 5,
                text: 'Silsin',
                active: false
            }
        ],
        showInput: false
    }
    roleSelectHandler = (e) => {
        let selId = e.currentTarget.id;
        let roles = [...this.state.roles];
        let role = roles.find(role => role.text === selId);
        role.active = !role.active;
        this.setState({
            roles: roles
        })
    }
    operationSelectHandler = (e) => {
        let selId = e.currentTarget.id;
        let opers = [...this.state.operations];
        let oper = opers.find(oper => oper.text === selId);
        oper.active = !oper.active;
        this.setState({
            operations: opers
        })
    }
    addInputClickHanler = () => {
        this.setState({
            showInput: true
        })
    }
    deleteInputClickHanler = () => {
        this.setState({
            showInput: false
        })
    }
    render() {
        let add_user;
        if (this.state.showInput) {
            add_user = <> <label className='label'>Təsdiq edən istifadəçi</label>
                <div className='input-add'>
                    <input type='text' placeholder='numunə@.code.edu.az' />
                    <div className='del-input' onClick={this.deleteInputClickHanler} ><Icon path={mdiClose} size={.8} className='mdi' /></div>
                </div>
            </>
        } else {
            add_user = <div className='add-user-input' onClick={this.addInputClickHanler}>
                <Icon path={mdiPlus} size={.4} className='mdi'></Icon>
                <p>Təsdiq edən itifadəçi əlavə et</p>
            </div>
        }
        return (
            <div className={["popups", this.props.isOpen ? "open" : ""].join(" ")} id='confirming-role' >
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
                                return <div className={['check', oper.active ? 'active' : ''].join(' ')} key={oper.id}>
                                    <label htmlFor={oper.text}>
                                        <input type='checkbox' id={oper.text} style={{ 'display': 'none' }} onChange={this.operationSelectHandler} />
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
                                return <div className={['check', role.active ? 'active' : ''].join(' ')} key={role.id}>
                                    <label htmlFor={role.text}>
                                        <input type='checkbox' id={role.text} style={{ 'display': 'none' }} onChange={this.roleSelectHandler} />
                                        <div className='checkbox'>
                                            <Icon className='mdi' path={mdiCheckBold} size={.45} />
                                        </div>
                                        {role.text}
                                    </label>
                                </div>
                            })}
                        </div>
                        {add_user}
                    </div>
                    <div className="buttons text-center">
                        <Button class="btn btn-add-user">Əlavə et</Button>
                    </div>
                </div>
            </div>
        )
    }
}
