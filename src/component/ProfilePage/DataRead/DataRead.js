import React from 'react'

export default function DataRead(props) {
    return (
        <div className="form-group" id={props.data.type}>
            <p className="label">{props.data.label}</p>
            <p className="input">{props.data.data}</p>
        </div>
    )
}
