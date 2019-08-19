import React from 'react';
import Icon from '@mdi/react'
import {
    mdiTeach,
    mdiSchool,
    mdiAccountTie,
    mdiKeyVariant
} from '@mdi/js'

export default function Rol(props) {
    let path = null;
    let title = null;
    switch (props.title) {
        case ('teacher'):
            title = 'Müəllim';
            path = mdiTeach;
            break;
        case ('student'):
            title = 'Tələbə';
            path = mdiSchool;
            break;
        case ('manager'):
            title = 'Menecer';
            path = mdiAccountTie;
            break;
        case ('admin'):
            title = 'Admin';
            path = mdiKeyVariant;
            break;
        default:
            title = null;
            path = null;
    }
    return (
        <div class="segment" onClick={props.clicked}>
            <a href="#">
                <div class={"icon " + props.title + "-icon"}>
                    <Icon
                        path={path}
                        size={4}
                        className='mdi' />
                </div>
            </a>
            <div class="segment-title">{title}</div>
        </div>

    )
}
