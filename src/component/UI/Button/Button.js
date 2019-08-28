import React from 'react'

export default function Button(props) {
    return (
        <button onClick={props.clicked} className={props.class}>
            {props.children}
        </button>
    )
}
