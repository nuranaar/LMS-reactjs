import React, { Component } from 'react';
import './Users.scss';
import Icon from '@mdi/react';
import { mdiMagnify, mdiFilterVariant, mdiPencil, mdiDelete, mdiCheckBold } from '@mdi/js';
import userpp from '../../assets/img/users/images.jfif';
import Button from '../../component/UI/Button/Button';


export default class Users extends Component {
    render() {
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
                            <div className='filter'><Icon path={mdiFilterVariant} size={.8} className='mdi' />
                                <div className='filter-list'>
                                    <ul>
                                        <li>
                                            <label htmlFor='check'>
                                                <input type='checkbox' id='check' style={{ 'display': 'none' }} />
                                                <label htmlFor='check' className='checkbox'>
                                                    <Icon className='mdi' path={mdiCheckBold} size={.5} />
                                                </label>
                                                Hamısı
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Button class='btn add-user'>İstifadəçi əlavə et</Button>
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
                                    <tr className='active'>
                                        <td>
                                            <img src={userpp} alt='user' />
                                            Rizvan Bağırlı
                                            </td>
                                        <td>rizvan@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td><div className='status active'></div></td>
                                        <td>
                                            <div className="operations">
                                                <div className='edit'>
                                                    <Icon path={mdiPencil} size={.8} className='mdi' />
                                                    <div className='tooltip'>Düzəliş et</div>
                                                </div>
                                                <div className='delete'>
                                                    <Icon path={mdiDelete} size={.8} className='mdi' />
                                                    <div className='tooltip'>Sil</div>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='deactive'>
                                        <td>
                                            <img src={userpp} alt='user' />
                                            Knyaz Yaqublu
                                            </td>
                                        <td>knyaz@code.edu.az</td>
                                        <td>Müəllim</td>
                                        <td><div className='status deactive'></div></td>
                                        <td>
                                            <div className="operations">
                                                <div className='edit'>
                                                    <Icon path={mdiPencil} size={.8} className='mdi' />
                                                    <div className='tooltip'>Düzəliş et</div>
                                                </div>
                                                <div className='delete'>
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
            </div>
        )
    }
}
