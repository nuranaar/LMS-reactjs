import React from 'react'
import profile_photo from '../../assets/img/users/images.jfif';
import edit_photo from '../../assets/img/menubar-icons/change photo.png';
import DataEdit from './DataEdit/DataEdit';
import Button from '../../component/UI/Button/Button';
import Modal from '../../component/UI/Modal/Modal';
import { Link } from 'react-router-dom'
import RolCheckboxes from '../../component/ProfilePage/RolCheckboxes/RolCheckboxes';

export default class ProfileDataEdit extends React.Component {
    state = {
        rols: [{
            name: 'admin',
            datas: [
                {
                    id: 1,
                    label: 'Ad',
                    data: 'Gülsüm',
                    type: 'name'
                },
                {
                    id: 2,
                    label: 'Soyad',
                    data: 'Məmmədova',
                    type: 'surname'
                },
                {
                    id: 3,
                    label: 'Ata adı',
                    data: 'Fizuli',
                    type: 'father'
                },
                {
                    id: 4,
                    label: 'Doğum tarixi',
                    data: '13 avqust 1992',
                    type: 'birthday'
                },
                {
                    id: 5,
                    label: 'Email',
                    data: 'gulsumfm@code.edu.az',
                    type: 'email'
                },
                {
                    id: 6,
                    label: 'Telefon nömrəsi',
                    data: '051-760-31-81',
                    type: 'phone'
                },
                {
                    id: 7,
                    label: 'Yaşadığı ünvan',
                    data: 'Bakı şəh., Nərimanov ray., Heydər Əliyev pr. 76, mən. 19',
                    type: 'address'
                }

            ]
        }],
        currentRol: 'admin',
        showModal: false,
        dataTarget: null,
        roleSegments: [
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
                key: 4,
                text: 'Tələbə',
                active: false
            },
            {
                key: 5,
                text: 'Admin',
                active: false
            }
        ],
    }
    roleSelectHandler = (key) => {
        let roles = [...this.state.roleSegments]
        let activeRole = roles.filter(role => role.key === key);
        activeRole.map(active => active.active = !active.active);
        this.setState({
            roles: roles
        })
    }

    modalContentHandler = (e) => {
        e.preventDefault();

        this.setState({
            showModal: true,
            dataTarget: e.target.dataset.target
        })
    }
    modalCloseHandler = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        let display = {
            display: "none"
        };
        let modal = <Modal id={this.state.dataTarget} isOpen={this.state.showModal} closeModal={this.modalCloseHandler} sendNote={this.modalContentHandler} />
        let save_btn = null;
        let data_target = null;

        if (this.state.currentRol === 'admin' || this.state.currentRol === 'manager') {
            save_btn = <Button class="btn btn-send" >Yadda saxla</Button>;
            //success toastr
            
        } else {
            save_btn = <Button class="btn btn-send" >Dəyişikliyi göndər</Button>;
            data_target = "send-note-change";
        }
        return (
            <div className="page-body" id={[this.state.currentRol, "-profile"].join("")}>
                <div className="col-12">
                    <div className="body" id="profile-edit">
                        <div className="body-head d-flex justify-content-between">
                            <p className="title">Şəxsi məlumatın redaktəsi</p>
                        </div>
                        <form className="datas mt-6 pb-6" onSubmit={this.modalContentHandler} data-target={data_target}>
                            <div className="row">
                                <div className="col-3 text-center">
                                    <label htmlFor="photo">
                                        <div className="photo">
                                            <img className="user-photo" src={profile_photo} alt="" />
                                            <img className="change-label" src={edit_photo}
                                                alt="" />
                                        </div>
                                    </label>
                                    <input type="file" id="photo" style={display} />
                                    <a className="btn btn-del-photo" href="#">Profil şəklini sil</a>
                                </div>
                                <div className="col-9">
                                    {this.state.rols.filter(role => role.name === this.state.currentRol).map(role => {
                                        return role.datas.map(data => {
                                            return <DataEdit data={data} key={data.id} />
                                        })
                                    })}
                                    {this.state.currentRol === 'admin' ?
                                        <div className="form-group">
                                            <div className="label">Rollar</div>
                                            <div className='roles'>
                                                <ul >
                                                    {this.state.roleSegments.map(role => {
                                                        return <RolCheckboxes change={() => this.roleSelectHandler(role.key)} addClass={role.active ? 'active' : ''} text={role.text} key={role.key} />
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        : ''}
                                    <div className="form-btn">
                                        <Link to='/profile'>  <Button class="btn btn-cancel">Ləğv et</Button></Link>
                                        {save_btn}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {modal}
                </div>
            </div>
        )
    }
}
