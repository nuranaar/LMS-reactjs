import React from 'react'
import { Link } from 'react-router-dom'

export default function LessonsSegmentation(props) {
    return (
        <div className="segment">
            <Link to={['lessons/', props.segment.route].join('')}>
                <div className="icon ">
                    <img src={props.segment.icon} alt="d" />
                </div>
            </Link>
            <div className="segment-title">{props.segment.title}</div>
        </div>
    )
}
