import React from 'react'
import closeIcon from '../../../../assets/img/loginimg/cancel icon.png';

export default function UserDeleteConfirmModal(props) {
    return (
        <div className={["popups", props.isOpen ? "open" : ""].join(" ")} id={props.id}>
            <div onClick={props.closeModal} className="popup-area"></div>
            <div className="popup ">
            <div className="close" onClick={props.closeModal}>
        <img src={closeIcon} alt="close" />
    </div>
                    <div className="popup-header">
                        <p>İstifadəçini silmək</p>
                    </div>
                <p>Bu istifadəçini silmək istəyirsinizmi?</p>
            </div>
        </div>
    )
}
