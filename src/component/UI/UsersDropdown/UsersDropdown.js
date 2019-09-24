import React, { Component } from 'react';
import './UsersDropdown.scss';

export default class UsersDropdown extends Component {
    render() {
        return (
            <div className='dropdown-list'>
                <div className='dropdown-item'>
                    <div className='title'>Menecer</div>
                    <div className='option' onClick={this.props.selected}>vugar@code.edu.az</div>
                    <div className='option' onClick={this.props.selected}>xatira@code.edu.az</div>
                </div>
                <div className='dropdown-item'>
                    <div className='title'>Menecer</div>
                    <div className='option' onClick={this.props.selected}>vugar@code.edu.az</div>
                    <div className='option' onClick={this.props.selected}>xatira@code.edu.az</div>
                </div>
            </div>
        )
    }
}
