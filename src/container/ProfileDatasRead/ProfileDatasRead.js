import React from 'react'
import { Link } from 'react-router-dom'
import profile_photo from '../../assets/img/users/images.jfif';
import DataRead from '../../component/ProfilePage/DataRead/DataRead';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

export default class ProfileDatasRead extends React.Component {
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
        currentRol: 'admin'
    }

    render() {
        return (
            <div className="page-body" id={[this.state.currentRol, "-profile"].join("")}>
                <div className="col-12">
                    <div className="body" id="profile">
                        <div className="body-head d-flex justify-content-between">
                            <p className="title">Şəxsi məlumat</p>
                            <Link to='profile/edit' className=" btn-edit ">
                                <Icon path={mdiPencil}
                                    size={.9} className='mdi' />
                                Redaktə
                                et</Link>
                        </div>
                        <div className="datas mt-6 pb-6">
                            <div className="row">
                                <div className="col-3">
                                    <div className="photo">
                                        <img className="user-photo" src={profile_photo} alt="" />
                                    </div>
                                </div>
                                <div className="col-9">
                                    {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => {
                                        return rol.datas.map(data => {
                                            return <DataRead data={data} key={data.id} />
                                        })
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
