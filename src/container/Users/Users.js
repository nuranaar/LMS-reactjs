import React, { Component } from 'react';
import './Users.scss';
import Icon from '@mdi/react';
import { mdiMagnify, mdiFilterVariant, mdiPencil, mdiDelete } from '@mdi/js';
import userpp from '../../assets/img/users/images.jfif';
import Button from '../../component/UI/Button/Button';
import FilterItem from '../../component/FilterItem/FilterItem';


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
                text: 'Active',
                active: false

            },
            {
                key: 3,
                text: 'Deactive',
                active: false

            }
        ],
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
                            <div className='filter' onClick={this.filterClickHandler}><Icon path={mdiFilterVariant} size={.8} className='mdi' />
                                <div className={['filter-list', this.state.showFilters?'show':''].join(' ')}>
                                    <ul>
                                        {this.state.filters.map(filter => {
                                            return <FilterItem change={() => this.filterSelectHandler(filter.key)} addClass={filter.active ? 'active' : ''} text={filter.text} key={filter.key} />
                                        })}
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
