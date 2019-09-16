import React, { Component } from 'react';
import './UserRolesPage.scss';
import Button from '../../component/UI/Button/Button';
import UserRole from '../../component/UserRole/UserRole';

export default class UserRolesPage extends Component {
    state = {
        rols: [{
            id: 1,
            name: 'admin',
        },
        {
            id: 2,
            name: 'teacher',
        },
        {
            id: 3,
            name: 'student',
        },
        {
            id: 4,
            name: 'manager'
        }
        ],
        selectedRoleId: null,
        showRolEditModal: false,
        showDeleteConfirmModal: false
    }
    editClickHandler = (e) => {
        let selId = e.currentTarget.dataset.id;
        console.log(selId, 'edit');
        this.setState({
            selectedRoleId: selId,
            showRolEditModal: true
        })
    }
    deleteClickHandler = (e) => {
        let selId = parseInt(e.currentTarget.dataset.id);
        console.log(selId, 'delete');
        let rols = this.state.rols.filter(rol => rol.id !== selId);
        this.setState({
            selectedRoleId: selId,
            showDeleteConfirmModal: true
        })
        // this.setState({
        //     rols:rols
        // })
    }
    render() {
        return (
            <div className="page-body">
                <div className="col-lg-12">
                    <div className="body" >
                        <div className="body-head d-flex align-items-center">
                            <p className="title">Rollar</p>
                            <Button class='btn add-role' clicked={this.addUserRoleClickHandler}> Rol yarat</Button>
                        </div>
                        <div className='roles'>

                            {this.state.rols.map(rol => {
                                // return <UserRole clicked={() => this.roleCLickHandler(rol)} title={rol} />;
                                return <UserRole title={rol.name} key={rol.id} id={rol.id} clickEdit={this.editClickHandler} clickDelete={this.deleteClickHandler} />;
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
