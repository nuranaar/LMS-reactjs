import React from 'react'
import Button from '../../Button/Button';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import './RoleEditModal.scss';
import {
    mdiTeach,
    mdiSchool,
    mdiAccountTie,
    mdiKeyVariant,
} from '@mdi/js';

export default class RoleEditModal extends React.Component {
    state = {
        icons: [
            {
                id: 1,
                fill: '#873996',
                path: mdiKeyVariant,
            },
            {
                id: 2,
                fill: '#f0812b',
                path: mdiAccountTie,
            },
            {
                id: 3,
                fill: '#00a659',
                path: mdiTeach,
            },
            {
                id: 4,
                fill: '#ffc906',
                path: mdiSchool,
            },
        ],
        colors: [
            {
                id: 1,
                code: '#00a659',
            },
            {
                id: 2,
                code: '#0286cd',
            },
            {
                id: 3,
                code: '#873996',
            },
            {
                id: 4,
                code: '#e9584f',
            },
            {
                id: 5,
                code: '#f0812b',
            },
            {
                id: 6,
                code: '#ffc906',
            },
            {
                id: 7,
                code: '#3a3a3a',
            },
            {
                id: 8,
                code: '#44d7b6',
            },
            {
                id: 9,
                code: '#4a90e2',
            },
        ],
        currentColor: [],
        currentIcon: []
    }
    componentWillMount() {
        let rol = this.props.rol;
        let curIcon = this.state.icons.find(icon => icon.path === rol.path);
        let curColor = this.state.colors.find(col => col.code === rol.fill);
        this.setState({
            currentColor: curColor,
            currentIcon: curIcon
        })
    }
    iconClickHandler = (e) => {
        let selId = parseInt(e.currentTarget.dataset.id)
        let selIcon = this.state.icons.find(icon => icon.id === selId);
        this.setState({
            currentIcon: selIcon
        })
    }
    colorClickHandler = (e) => {
        let selId = parseInt(e.currentTarget.dataset.id)
        let selcolor = this.state.colors.find(color => color.id === selId);
        this.setState({
            currentColor: selcolor
        })
    }
    render() {
        return ( 
            <div className={["popups", this.props.isOpen ? "open" : ""].join(" ")}>
                <div onClick={this.props.closeModal} className="popup-area"></div>
                <div className="popup ">
                    <div className="close" onClick={this.props.closeModal}>
                        <Icon path={mdiClose} className="close" size={.8} />
                    </div>
                    <div className="popup-header">
                        <p>{this.props.rol.label} rolunu redaktə etmək</p>
                    </div>
                    <div className='popup-body'>
                        <label className='label'>
                            Rolun adı
                    </label>
                        <input type='text' defaultValue={this.props.rol.label} />
                        <p className='label'>Icon</p>
                        <div className='icon-set'>
                            {this.state.icons.map(icon => { return <div key={icon.id} className={['item', icon.id === this.state.currentIcon.id ? 'active' : ''].join(' ')} data-id={icon.id} onClick={this.iconClickHandler}><Icon path={icon.path} size={1.4} className='mdi' /></div> })}
                        </div>
                        <p className='label'>İconun rəngi</p>
                        <div className='color-set'>
                            {this.state.colors.map(color => { return <div key={color.id} className={['color-item', color.id === this.state.currentColor.id ? 'active' : ''].join(' ')} data-id={color.id} onClick={this.colorClickHandler} style={color.id === this.state.currentColor.id ?{ borderColor: color.code }:{borderColor: '#fff'}}> <div className='circle' style={{ backgroundColor: color.code }}></div> </div> })}
                        </div>
                    </div>
                    <div className="buttons text-center">
                        <Button class="btn btn-cancel" clicked={this.props.closeModal} >Ləğv et</Button>
                        <Button class="btn btn-confirm">Yadda saxla</Button>
                    </div>
                </div>
            </div>
        )
    }
}
