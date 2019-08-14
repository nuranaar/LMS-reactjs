import React from 'react';
import closeIcon from '../../../assets/img/loginimg/cancel icon.png'

export default function Modal(props) {
    let close='';
    if(props.closeBtn){
        close = <div className="close">
        <img src={closeIcon} alt="close"/>
    </div>;
    }else{
        close='';
    }
    return (
        <div className="popups" id={props.id} style={props.style}>
            <div className="popup-area"></div>
            <div className="popup ">
                {close}
                <div className="popup-header">
                    <p>{props.title}</p>
                </div>
                {props.children}
            </div>
        </div>
    )
}
