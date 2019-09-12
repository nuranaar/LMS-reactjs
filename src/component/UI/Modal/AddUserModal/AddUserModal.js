import React from 'react'
import closeIcon from '../../../../assets/img/loginimg/cancel icon.png';
import './AddUserModal.scss';
import Button from '../../Button/Button';
import Icon from '@mdi/react';
import { mdiPlus, mdiClose } from '@mdi/js';

export default class AddUserModal extends React.Component {
    state = {
        count: 1,
        inputs: [{ id: 1, input: <input data-id='1' type='text' placeholder='numunə@.code.edu.az' /> }]
    }
    addInputClickHanler = () => {
        let input;
        let inputs = [...this.state.inputs];
        let count = ++this.state.count;
        for (let i = count; i <= count; i++) {
            let id = new Date().getMilliseconds();
            input = <input data-id={id} type='text' placeholder='numunə@.code.edu.az' />;
            inputs.push({ id, input });
            console.log(inputs);
        }
        this.setState({
            count: count,
            inputs: inputs
        })
    }
    deleteInputClickHanler = (e) => {
        // console.log(e.currentTarget.dataset.id);
        let deletedId = e.currentTarget.dataset.id;
        let inputs = this.state.inputs.filter(input => input.id != deletedId);
        // console.log(deletedId, inputs);
        let count = --this.state.count;
        this.setState({
            count: count,
            inputs: inputs
        })
    }
    render() {
        let icon = '';
        if (this.state.count > 1) {
            icon = <Icon path={mdiClose} size={.8} className='mdi' />
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
}