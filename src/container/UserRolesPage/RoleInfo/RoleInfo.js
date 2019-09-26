import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiMagnify, mdiDelete, mdiPencil, mdiCheckBold, mdiPlusCircle, mdiKeyboardBackspace } from '@mdi/js';
import Button from '../../../component/UI/Button/Button';
import './RoleInfo.scss';
import UserDeleteConfirmModal from '../../../component/UI/Modal/UserDeleteConfirmModal/UserDeleteConfirmModal';
import userpp from '../../../assets/img/users/user.jpg';
import { set } from 'date-fns';
import ConfirmingRoleModal from '../../../component/UI/Modal/ConfirmingRoleModal/ConfirmingRoleModal';

class RoleInfo extends Component {
    state = {

        privileges: [
            {
                name: 'read',
                active: false
            },
            {
                name: 'edit',
                active: false
            },
            {
                name: 'create',
                active: false
            },
            {
                name: 'update',
                active: false
            }
        ],
        showUsers: true,
        showDeleteConfirm: false,
        showConfirmingRoleModal: false
    }

    usersSelectedHandler = () => {
        this.setState({
            showUsers: true
        })
    }
    privilegesSelectedHandler = () => {
        this.setState({
            showUsers: false
        })
    }
    deleteClickHandler = () => {
        this.setState({
            showDeleteConfirm: true
        })
    }
    closeDeleteConfirmModal = () => {
        this.setState({
            showDeleteConfirm: false
        })
    }
    changeHandler = (e) => {
        let clicked = e.currentTarget.parentNode.parentNode.dataset.target;
        let privs = [...this.state.privileges];
        let priv = privs.find(pr => pr.name === clicked);
        priv.active = !priv.active;
        this.setState({
            privileges: privs
        })
    }
    addConfirmingRoleHandler = () => {
        let show = !this.state.showConfirmingRoleModal;
        this.setState({
            showConfirmingRoleModal: show
        })
    }
    closeConfirmingRoleModal = () => {
        this.setState({
            showConfirmingRoleModal: false
        })
    }
    render() {
        let deleteConfirmModal;
        let confirmingRoleModal;
        if (this.state.showDeleteConfirm) {
            deleteConfirmModal = <UserDeleteConfirmModal
                isOpen={this.state.showDeleteConfirm}
                closeModal={this.closeDeleteConfirmModal}
            />
        }
        if (this.state.showConfirmingRoleModal) {
            confirmingRoleModal = <ConfirmingRoleModal
                isOpen={this.state.showConfirmingRoleModal}
                closeModal={this.closeConfirmingRoleModal}
            />
        }
        let table;
        if (this.state.showUsers) {
            table = <table className='users'>
                <thead>
                    <tr>
                        <th>İstifadəçilər</th>
                        <th>Email</th>
                        <th>Digər rollar</th>
                        <th>Əməliyyat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-id='1'>
                        <td>
                            <img src={userpp} alt='user' />
                            Yolchu Nasib
            </td>
                        <td>yolchu@code.edu.az</td>
                        <td>Müəllim</td>
                        <td>
                            <div className="operations">
                                <Link to={{ pathname: `/users/${1}` }}>
                                    <div className='edit' onClick={this.editClickHandler} data-id='1'>
                                        <Icon path={mdiPencil} size={.8} className='mdi' />
                                        <div className='tooltip'>Düzəliş et</div>
                                    </div>
                                </Link>
                                <div className='delete' onClick={this.deleteClickHandler}>
                                    <Icon path={mdiDelete} size={.8} className='mdi' />
                                    <div className='tooltip'>Sil</div>

                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr data-id='2' >
                        <td>
                            <img src={userpp} alt='user' />
                            Knyaz Yaqublu
            </td>
                        <td>knyaz@code.edu.az</td>
                        <td>Müəllim</td>
                        <td>
                            <div className="operations">
                                <Link to={{ pathname: `/users/${2}` }}>
                                    <div className='edit' onClick={this.editClickHandler} data-id='2'>
                                        <Icon path={mdiPencil} size={.8} className='mdi' />
                                        <div className='tooltip'>Düzəliş et</div>
                                    </div>
                                </Link>
                                <div className='delete' onClick={this.deleteClickHandler}>
                                    <Icon path={mdiDelete} size={.8} className='mdi' />
                                    <div className='tooltip'>Sil</div>

                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        }
        else {
            table = <table className='privileges'>
                <thead>
                    <tr>
                        <th>İmtiyazlar</th>
                        <th>Görsün</th>
                        <th>Redaktə etsin</th>
                        <th>Yaratsın</th>
                        <th>Silsin</th>
                        <th>Təsdiq edən rol</th>
                        <th>Əməliyyatlar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-id='1'>
                        <td>
                            Profil
                        </td>
                        {this.state.privileges.map(priv => {
                            return <td key={priv.name}>
                                <div data-target={priv.name} className={['check', priv.active ? 'active' : ''].join(' ')}>
                                    <label htmlFor={this.props.text}>
                                        <input type='checkbox' id={this.props.text} style={{ 'display': 'none' }} onChange={this.changeHandler} />
                                        <div className='checkbox'>
                                            <Icon className='mdi' path={mdiCheckBold} size={.45} />
                                        </div>
                                        {this.props.text}
                                    </label>
                                </div>
                            </td>
                        })}

                        <td className='d-flex align-items-center'>
                            Yoxdur
                            <div className="operations">
                                <div className='add' onClick={this.addConfirmingRoleHandler}>
                                    <Icon path={mdiPlusCircle} size={.8} className='mdi' />
                                    <div className='tooltip'>Təsdiq edən rol əlavə et</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="operations">
                                <div className='delete ml-7' onClick={this.deleteClickHandler}>
                                    <Icon path={mdiDelete} size={.8} className='mdi' />
                                    <div className='tooltip'>Sil</div>

                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        }
        return (
            <div className='page-body'>
                <div className="col-12">
                    <div className="body" id="profile-edit">
                        <div className="body-head d-flex align-items-center">
                            <Link to='/roles'>
                                <Icon path={mdiKeyboardBackspace} size={1} className='mdi toback' />
                            </Link>
                            <p className="title">{this.props.match.params.roleName} rol</p>
                            <div className='search'>
                                <input className='search-input' type='text' placeholder='Ad və ya emailə görə axtar' />
                                <Icon path={mdiMagnify} size={.8} className='mdi' />
                            </div>
                            <div className='selecting-list' >
                                <div onClick={this.usersSelectedHandler} className={['item', this.state.showUsers ? 'active' : ''].join(' ')}>İstifadəçilər</div>
                                <div onClick={this.privilegesSelectedHandler} className={['item', !this.state.showUsers ? 'active' : ''].join(' ')}>İmtiyazlar</div>
                            </div>
                            {this.state.showUsers ? <Button class='btn add-user' clicked={this.addUserClickHandler}>İstifadəçi əlavə et</Button> : <Button class='btn add-user' clicked={this.addUserClickHandler}>İmtiyaz əlavə et</Button>}

                        </div>
                        <div className="datas mt-3 pb-6">
                            {table}
                        </div>
                    </div>
                </div>
                {deleteConfirmModal}
                {confirmingRoleModal}
            </div>
        )
    }
}

export default withRouter(RoleInfo);