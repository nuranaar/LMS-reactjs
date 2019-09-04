import React from 'react'
import Icon from '@mdi/react';
import { mdiCalendarMonth } from '@mdi/js';

export default function GroupsCard(props) {
    return (
        <div className="col-md-12">
            <div className="statistic-item statistic-card groups-date">
                <div className="card-head">
                    <div className="card-title">{props.title}</div>
                    <div className="calendar icon"><Icon path={mdiCalendarMonth} size={.7} className='mdi' /></div>
                </div>
                <div className="card-body">
                    <ul className="card-list">
                        <li className="card-item">
                            <p className="title">V105</p>
                            <p className="date">22.08.2019</p>
                        </li>
                        <li className="card-item">
                            <p className="title">V205</p>
                            <p className="date">22.08.2019</p>
                        </li>
                        <li className="card-item">
                            <p className="title">V305</p>
                            <p className="date">22.08.2019</p>
                        </li>
                        <li className="card-item">
                            <p className="title">V405</p>
                            <p className="date">22.08.2019</p>
                        </li>
                        <li className="card-item">
                            <p className="title">V505</p>
                            <p className="date">22.08.2019</p>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}
