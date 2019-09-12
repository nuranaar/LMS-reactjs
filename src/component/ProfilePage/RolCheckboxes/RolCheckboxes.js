import React from 'react'
import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';
import './RolCheckbox.scss'

export default function RolCheckboxes(props) {
    return (
        <li className={['role', props.addClass].join(' ')}  >
            <label htmlFor={props.text}>
                <input type='checkbox' id={props.text} style={{ 'display': 'none' }} onChange={props.change} />
                <div className='checkbox'>
                    <Icon className='mdi' path={mdiCheckBold} size={.45} />
                </div>
                {props.text}
            </label>
        </li>
        
    )
}
