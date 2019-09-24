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
            <div className="segment" onClick={props.clicked}>
                <a href="#">
                    <div className={"icon " + props.title + "-icon"}>
                        <Icon
                            path={path}
                            size={4}
                            className='mdi'
                            fill={fill} />
                    </div>
                </a>
                <div className="segment-title">{title}</div>
            </div>
    )
}
