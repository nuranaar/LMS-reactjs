import React from 'react'

export default function ProfileDatasRead(props) {
    return (
        <div className="form-group">
            <p className="label">{props.label}</p>
            <p className="input">{props.data}</p>
        </div>
    )
}
