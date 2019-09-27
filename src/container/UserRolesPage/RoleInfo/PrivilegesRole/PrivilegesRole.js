import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccount, mdiTrashCan, mdiDelete } from '@mdi/js'
import './PrivilegesRole.scss'

export default class PrivilegesRole extends Component {
    state = {
        showList: false
    }
    iconClickHandler = () => {
        this.setState({
            showList: true
        })
    }
    overlayClickHandler = () => {
        this.setState({
            showList: false
        })
    }
    render() {
        return (
            <div className='hasRole' style={{ position: 'absolute' }}>
                <Icon className='mdi ' path={mdiAccount} size={.9} onClick={this.iconClickHandler} />
                <div className='privilegs_roles' style={this.state.showList ? { display: 'block' } : { display: 'none' }} >
                    <div className='overlay' onClick={this.overlayClickHandler}></div>
                    <div className='roles-list'>
                        <div className='title'>Təsdiq edən rollar</div>
                        <ul>
                            <li>Admin <Icon path={mdiDelete} size={.8} className='mdi' /></li>
                            <li>Menecer <Icon path={mdiDelete} size={.8} className='mdi' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
