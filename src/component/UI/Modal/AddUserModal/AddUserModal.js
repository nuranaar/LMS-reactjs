import React from 'react'
import closeIcon from '../../../../assets/img/loginimg/cancel icon.png';
import './AddUserModal.scss';
import Button from '../../Button/Button';
import Icon from '@mdi/react';
import { mdiPlus, mdiClose } from '@mdi/js';

export default class AddUserModal extends React.Component {
    state = {
        count: 1
    }
    addInputClickHanler = () => {
        let count = ++this.state.count;
        this.setState({
            count: count
        })
    }
    deleteInputClickHanler = () => {
        let count = --this.state.count;
        this.setState({
            count: count
        })
    }

    render() {
        // let input = <input type='text' placeholder='numunə@.code.edu.az' />;
        let input;
        let icon = '';
        let inputs = [];
        if (this.state.count > 1) {
            icon = <Icon path={mdiClose} size={.8} className='mdi' onClick={this.deleteInputClickHanler} />
        }
        for (let i = 1; i <= this.state.count; i++) {
            input = <div key={i} className='input-add'> <input type='text' placeholder='numunə@.code.edu.az' />
                {icon}
            </div>;
            inputs.push(input);
        }
        return (
            <div className={["popups", this.props.isOpen ? "open" : ""].join(" ")} id={this.props.id}>
                <div onClick={this.props.closeModal} className="popup-area"></div>
                <div className="popup ">
                    <div className="close" onClick={this.props.closeModal}>
                        <img src={closeIcon} alt="close" />
                    </div>
                    <div className="popup-header">
                        <p>İstifadəçi əlavə et</p>
                    </div>
                    <div className='popup-body'>
                        {inputs.map(input => input)}
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
}