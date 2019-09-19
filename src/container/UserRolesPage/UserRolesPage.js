import React, { Component } from 'react';
import './UserRolesPage.scss';
import Button from '../../component/UI/Button/Button';
import UserRole from '../../component/UserRole/UserRole';
import RoleDeleteConfirmModal from '../../component/UI/Modal/RoleDeleteConfirmModal/RoleDeleteConfirmModal';
import RoleEditModal from '../../component/UI/Modal/RoleEditModal/RoleEditModal';
import {
    mdiTeach,
    mdiSchool,
    mdiAccountTie,
    mdiKeyVariant,
} from '@mdi/js';
import RoleAddModal from '../../component/UI/Modal/RoleAddModal/RoleAddModal';

export default class UserRolesPage extends Component {
    state = {
        rols: [{
            id: 1,
            name: 'admin',
            label: 'Admin',
            fill: '#873996',
            path: mdiKeyVariant
        },
        {
            id: 4,
            name: 'manager',
            label: 'Menecer',
            fill: '#f0812b',
            path: mdiAccountTie
        },
        {
            id: 2,
            name: 'teacher',
            label: 'Müəllim',
            fill: '#00a659',
            path: mdiTeach
        },
        {
            id: 3,
            name: 'student',
            label: 'Tələbə',
            fill: '#ffc906',
            path: mdiSchool
        },
        ],
        selectedRoleId: '',
        showRolEditModal: false,
        showRolAddModal: false,
        showDeleteConfirmModal: false
    }
    editClickHandler = (e) => {
        let selId = parseInt(e.currentTarget.dataset.id);
        this.setState({
            selectedRoleId: selId,
            showRolEditModal: true
        })
    }
    deleteClickHandler = (e) => {
        let selId = parseInt(e.currentTarget.dataset.id);
        this.setState({
            selectedRoleId: selId,
            showDeleteConfirmModal: true
        })
    }
    addUserRoleClickHandler = () => {
        this.setState({
            showRolAddModal: true
        })
    }
    closeDeleteModal = () => {
        this.setState({
            showDeleteConfirmModal: false
        })
    }
    closeEditModal = () => {
        this.setState({
            showRolEditModal: false
        })
    }
    closeAddModal = () => {
        this.setState({
            showRolAddModal: false
        })
    }
    render() {
        let delete_modal = '';
        let edit_modal = '';
        let add_modal = '';
        let rol = this.state.rols.find(rol => rol.id === this.state.selectedRoleId);
        if (this.state.showDeleteConfirmModal) {
            delete_modal = <RoleDeleteConfirmModal isOpen={this.state.showDeleteConfirmModal} closeModal={this.closeDeleteModal} rol={rol} />
        }
        if (this.state.showRolEditModal) {
            edit_modal = <RoleEditModal isOpen={this.state.showRolEditModal} closeModal={this.closeEditModal} rol={rol} />
        }
        if (this.state.showRolAddModal) {
            add_modal = <RoleAddModal isOpen={this.state.showRolAddModal} closeModal={this.closeAddModal} rol={rol} />
        }
        return (

            <div className="page-body">
                <div className="col-lg-12">
                    <div className="body" >
                        <div className="body-head d-flex align-items-center">
                            <p className="title">Rollar</p>
                            <Button class='btn add-role' clicked={this.addUserRoleClickHandler}> Rol yarat</Button>
                        </div>
                        <div className='roles'>

                            {this.state.rols.map(role => {
                                return <UserRole key={role.id} role={role} clickEdit={this.editClickHandler} clickDelete={this.deleteClickHandler} />;
                            })}
                        </div>
                    </div>
                </div>
                {delete_modal}
                {edit_modal}
                {add_modal}
            </div >
        )
    }
}
