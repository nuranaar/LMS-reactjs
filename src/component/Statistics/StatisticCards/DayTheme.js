import React from 'react'
import Icon from '@mdi/react';
import { mdiCalendarMonth } from '@mdi/js';

export default function DayTheme(props) {
    return (
        <div className="col-md-12">
            <div className="statistic-item statistic-card">
                <div className="card-head">
                    <div className="card-title">Günün mövzusu</div>
                    <div className="calendar icon"><Icon path={mdiCalendarMonth} size={.7} className='mdi' /></div>
                </div>
                <div className="card-body">
                    <div className="title">{props.theme}</div>
                    <div className="card-info pt-2">{props.desc}</div>
                </div>
            </div>
        </div>
    )
}
