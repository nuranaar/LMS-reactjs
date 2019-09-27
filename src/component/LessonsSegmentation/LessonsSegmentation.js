import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'

export default function LessonsSegmentation(props) {
    return (
        <div className="segment">
            <Link to={['lessons/', props.segment.route].join('')}>
                <div className="icon ">
                    <Icon path={props.segment.icon} className="mdi" size='100%' fill={props.segment.color}/>
                </div>
            </Link>
            <div className="segment-title">{props.segment.title}</div>
        </div>
    )
}
