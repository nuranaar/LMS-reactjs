import React, { Component } from 'react';
import './Users.scss';
import Icon from '@mdi/react';
import { mdiMagnify, mdiFilterVariant, mdiPencil, mdiDelete } from '@mdi/js';
import userpp from '../../assets/img/users/images.jfif';
import Button from '../../component/UI/Button/Button';
import FilterItem from '../../component/FilterItem/FilterItem';
import UserDeleteConfirmModal from '../../component/UI/Modal/UserDeleteConfirmModal/UserDeleteConfirmModal';
import AddUserModal from '../../component/UI/Modal/AddUserModal/AddUserModal';
import { Route, Link } from 'react-router-dom'


export default class Users extends Component {
    state = {
        showFilters: false,
        filters: [
            {
                key: 1,
                text: 'Hamisi',
                active: false

            },
            {
                key: 2,
                text: 'Müəllim',
                active: false

            },
            {
                key: 3,
                text: 'Menecer',
                active: false

            },
            {
                key: 4,
                text: 'Tələbə',
                active: false
            },
            {
                key: 5,
                text: 'Admin',
                active: false
            },
            {
                key: 6,
                text: 'Active',
                active: false

            },
            {
                key: 7,
                text: 'Deactive',
                active: false

            }
        ],
        showDeleteConfirm: false,
        showAddUser: false,
        selectedForEdit: '',
    }
    filterSelectHandler = (key) => {
        let filters = [...this.state.filters]
        let activeFilter = filters.filter(filter => filter.key === key);
        activeFilter.map(active => active.active = !active.active);
        this.setState({
            filters: filters
        })
    }
    filterClickHandler = () => {
        let isOpen = !this.state.showFilters;
        this.setState({
            showFilters: isOpen
        })
    }
    editClickHandler = (e) => {
        let selId = console.log(e.currentTarget.dataset.id);
        this.setState({
            selectedForEdit: selId
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
    addUserClickHandler = () => {
        this.setState({
            showAddUser: true
        })
    }
    closeAddUserModal = () => {
        this.setState({
            showAddUser: false
        })
    }
    render() {
        let deleteConfirmModal;
        let addUserModal;
        if (this.state.showDeleteConfirm) {
            deleteConfirmModal = <UserDeleteConfirmModal
                isOpen={this.state.showDeleteConfirm}
                closeModal={this.closeDeleteConfirmModal}
                id='delete_confirm_modal'
            />
        }
        if (this.state.showAddUser) {
            addUserModal = <AddUserModal
                isOpen={this.state.showAddUser}
                closeModal={this.closeAddUserModal}
                id='delete_confirm_modal'
            />
        }
        return (
            <div className="page-body">
                <div className="col-lg-12">
                    <div className="body" >
                        <div className="body-head d-flex align-items-center">
                            <p className="title">Istifadəçilər</p>
                            <div className='search'>
                                <input className='search-input' type='text' placeholder='Ad və ya emailə görə axtar' />
                                <Icon path={mdiMagnify} size={.8} className='mdi' />
                            </div>
                            <div className='filter' ><Icon onClick={this.filterClickHandler} path={mdiFilterVariant} size={.8} className='mdi' />
                                <div className={['filter-list', this.state.showFilters ? 'show' : ''].join(' ')}>
                                    <ul>
                                        {this.state.filters.map(filter => {
                                            return <FilterItem change={() => this.filterSelectHandler(filter.key)} addClass={filter.active ? 'active' : ''} text={filter.text} key={filter.key} />
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <Button class='btn add-user' clicked={this.addUserClickHandler}>İstifadəçi əlavə et</Button>
                        </div>
                        <div className="datas mt-3 pb-6">
                            <table>
                                <thead>
                                    <tr>
                                        <th>İstifadəçilər</th>
                                        <th>Email</th>
                                        <th>Rol</th>
                                        <th>Status</th>
                                        <th>Əməliyyat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-id='1' className='active'>
                                        <td>
                                            <img src={userpp} alt='user' />
                                            Rizvan Bağırlı
                                            </td>
                                        <td>rizvan@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td><div className='status active'></div></td>
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
                                    <tr data-id='2' className='deactive'>
                                        <td>
                                            <img src={userpp} alt='user' />
                                            Knyaz Yaqublu
                                            </td>
                                        <td>knyaz@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td><div className='status deactive'></div></td>
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
                {addUserModal}
            </div >
        )
    }
}
