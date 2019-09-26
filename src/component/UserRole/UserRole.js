import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom'
import {
    mdiDelete,
    mdiPencil
} from '@mdi/js'
import './UserRole.scss';

export default function UserRole(props) {


    return (
        <div className='col-3'>
            <div className="role-card"  >
                <div className='operations'>
                    <div className='operation delete' data-id={props.role.id} onClick={props.role.clickDelete}><Icon path={mdiDelete}
                        size={.7}
                        className='mdi'
                    /></div>
                    <div className='operation edit' data-id={props.role.id} onClick={props.role.clickEdit}><Icon path={mdiPencil}
                        size={.7}
                        className='mdi'
                    /></div>
                </div>
                <Link to={{ pathname: `/roles/${props.role.name}`, state: { role: `${props.role}` } }}>
                    <div className="icon">
                        <Icon
                            path={props.role.path}
                            size={3}
                            className='mdi'
                            fill={props.role.fill} />
                    </div>
                </Link>
                <div className="card-title">{props.role.label}</div>
            </div >
        </div>
    )
}
