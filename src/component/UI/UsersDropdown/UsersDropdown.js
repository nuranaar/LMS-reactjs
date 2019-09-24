import React, { Component } from 'react';
import './UsersDropdown.scss';

export default class UsersDropdown extends Component {
    render() {
        let activeRoles = this.props.roles.filter(role => role.active === true);
        let dropdown_item;
        if (activeRoles.length) {
            dropdown_item = activeRoles.map(role => {
                return <div key={role.id} className='dropdown-item'>
                    <div className='title'>{role.text}</div>
                    <div className='option' onClick={this.props.selected}>vugar@code.edu.az</div>
                    <div className='option' onClick={this.props.selected}>xatira@code.edu.az</div>
                    <div className='option' onClick={this.props.selected}>xatira@code.edu.az</div>
                </div>
            })
        }
        else {
            dropdown_item = this.props.roles.map(role => {
                return <div key={role.id} className='dropdown-item'>
                    <div className='title'>{role.text}</div>
                    <div className='option' onClick={this.props.selected}>vugar@code.edu.az</div>
                    <div className='option' onClick={this.props.selected}>xatira@code.edu.az</div>
                </div>
            })
        }
        return (
            <div className='dropdown-list'>
                {dropdown_item}
            </div>
        )
    }
}
