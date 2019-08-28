import React from 'react'
import gradient from '../../assets/img/loginimg/gradient.jpg'; 


export default function LoginPages(props) {
    return (
        <main className="container">
            {props.children}
            <img className='gradient' src={gradient} alt="gradient" />
        </main>
    )
}
