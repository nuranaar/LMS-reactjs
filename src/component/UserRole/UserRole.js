import React from 'react';
import Icon from '@mdi/react'
import {
    mdiDelete,
    mdiPencil
} from '@mdi/js'
import './UserRole.scss';

export default function UserRole(props) {


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
                        path={props.path}
                        size={3}
                        className='mdi'
                        fill={props.fill} />
                </div>
            </a>
            <div className="card-title">{props.label}</div>
        </div>

    )
}
