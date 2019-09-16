import React from 'react';
import Icon from '@mdi/react'
import {
    mdiTeach,
    mdiSchool,
    mdiAccountTie,
    mdiKeyVariant,
    mdiDelete,
    mdiPencil
} from '@mdi/js'
import './UserRole.scss';

export default function UserRole(props) {
    let path = null;
    let fill = null;
    let title = null;
    switch (props.title) {
        case ('teacher'):
            title = 'Müəllim';
            path = mdiTeach;
            fill = '#00a659';
            break;
        case ('student'):
            title = 'Tələbə';
            fill = '#ffc906';
            path = mdiSchool;
            break;
        case ('manager'):
            title = 'Menecer';
            path = mdiAccountTie;
            fill = '#f0812b';
            break;
        case ('admin'):
            title = 'Admin';
            path = mdiKeyVariant;
            fill = '#873996';
            break;
        default:
            title = null;
            path = null;
    }
    return (
        <div className="role-card"  >
            <div className='operations'>
                <div className='operation delete' data-id={props.id} onClick={props.clickDelete}><Icon path={mdiDelete}
                size={.7}
                className='mdi'
                /></div>
                <div className='operation edit' data-id={props.id} onClick={props.clickEdit}><Icon path={mdiPencil}
                size={.7}
                className='mdi'
                /></div>
            </div>
            <a href="#">
                <div className="icon">
                    <Icon
                        path={path}
                        size={3}
                        className='mdi'
                        fill={fill} />
                </div>
            </a>
            <div className="card-title">{title}</div>
        </div>

    )
}
