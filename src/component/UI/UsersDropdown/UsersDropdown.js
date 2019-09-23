import React, { Component } from 'react';
import './UsersDropdown.scss';

export default class UsersDropdown extends Component {
    render() {
        return (
            <div className='dropdown-list'>
                <div className='dropdown-item'>
                    <div className='title'>Menecer</div>
                    <div className='option'>vugar@code.edu.az</div>
                    <div className='option'>xatira@code.edu.az</div>
                </div>
                <div className='dropdown-item'>
                    <div className='title'>Menecer</div>
                    <div className='option'>vugar@code.edu.az</div>
                    <div className='option'>xatira@code.edu.az</div>
                </div>
            </div>
        )
    }
}
