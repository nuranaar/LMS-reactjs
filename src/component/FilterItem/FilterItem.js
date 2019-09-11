import React from 'react'
import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';
export default function FilterItem(props) {
    return (
        <li className={['filter-item', props.addClass].join(' ')}  >
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
