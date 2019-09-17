import React from 'react'

export default function RoleAddModal(props) {
    return (
        <div className={["popups", this.props.isOpen ? "open" : ""].join(" ")}>
        <div onClick={this.props.closeModal} className="popup-area"></div>
        <div className="popup ">
            <div className="close" onClick={this.props.closeModal}>
                <img src={closeIcon} alt="close" />
            </div>
            <div className="popup-header">
                <p>Rol əlavə et</p>
            </div>
            <div className='popup-body'>
                {this.state.inputs.map(input => <div key={input.id} className='input-add'> {input.input}
                    <div className='del-input' onClick={this.deleteInputClickHanler} data-id={input.id}>{icon}</div>
                </div>)}
                <div className='add-user-input' onClick={this.addInputClickHanler}>
                    <Icon path={mdiPlus} size={.4} className='mdi'></Icon>
                    <p>İstifadəçi əlavə et</p>
                </div>
            </div>
            <div className="buttons text-center">
                <Button class="btn btn-add-user">Əlavə et</Button>
            </div>
        </div>
    </div>
    )
}
