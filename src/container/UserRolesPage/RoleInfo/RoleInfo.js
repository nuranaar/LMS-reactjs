import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiMagnify, mdiDelete, mdiPencil } from '@mdi/js';
import Button from '../../../component/UI/Button/Button';
import './RoleInfo.scss';
import UserDeleteConfirmModal from '../../../component/UI/Modal/UserDeleteConfirmModal/UserDeleteConfirmModal';

class RoleInfo extends Component {
    state = {
        showUsers: true,
        showDeleteConfirm: false
    }
    usersSelectedHandler = () => {
        this.setState({
            showUsers: true
        })
    }
    privelegesSelectedHandler = () => {
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
    render() {
        let deleteConfirmModal;
        if (this.state.showDeleteConfirm) {
            deleteConfirmModal = <UserDeleteConfirmModal
                isOpen={this.state.showDeleteConfirm}
                closeModal={this.closeDeleteConfirmModal}
                id='delete_confirm_modal'
            />
        }
        return (
            <div className='page-body'>
                <div className="col-lg-12">
                    <div className="body" id="profile-edit">
                        <div className="body-head d-flex align-items-center">
                            <p className="title">{this.props.match.params.roleName} rol</p>
                            <div className='search'>
                                <input className='search-input' type='text' placeholder='Ad və ya emailə görə axtar' />
                                <Icon path={mdiMagnify} size={.8} className='mdi' />
                            </div>
                            <div className='selecting-list' >
                                <div onClick={this.usersSelectedHandler} className={['item', this.state.showUsers ? 'active' : ''].join(' ')}>İstifadəçilər</div>
                                <div onClick={this.privelegesSelectedHandler} className={['item', !this.state.showUsers ? 'active' : ''].join(' ')}>İmtiyazlar</div>
                            </div>
                            {this.state.showUsers ? <Button class='btn add-user' clicked={this.addUserClickHandler}>İstifadəçilər əlavə et</Button> : <Button class='btn add-user' clicked={this.addUserClickHandler}>İmtiyaz əlavə et</Button>}

                        </div>
                        <div className="datas mt-3 pb-6">
                            <table>
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
                                            {/* <img src={userpp} alt='user' /> */}
                                            Rizvan Bağırlı
                                            </td>
                                        <td>rizvan@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td>
                                            <div className="operations">
                                                {/* <Link to={{ pathname: '/users/edit', search: { id: this.state.selectedForEditId } }}> */}
                                                <Link to={{ pathname: `/users/${1}` }}>
                                                    <div className='edit' onClick={this.editClickHandler} data-id='1'>
                                                        {/* <div className='edit'> */}
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
                                            {/* <img src={userpp} alt='user' /> */}
                                            Knyaz Yaqublu
                                            </td>
                                        <td>knyaz@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td>
                                            <div className="operations">
                                                <Link to={{ pathname: `/users/${2}` }}>
                                                    <div className='edit' onClick={this.editClickHandler} data-id='2'>
                                                        {/* <div className='edit'> */}
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
                        </div>
                    </div>
                </div>
                {deleteConfirmModal}
            </div>
        )
    }
}

export default withRouter(RoleInfo);