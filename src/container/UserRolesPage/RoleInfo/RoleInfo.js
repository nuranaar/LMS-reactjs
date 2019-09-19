import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Icon from '@mdi/react';
import { mdiMagnify, mdiFunctionVariant, mdiFilterVariant } from '@mdi/js';
import Button from '../../../component/UI/Button/Button';
import './RoleInfo.scss';

class RoleInfo extends Component {
    render() {
        return (
            <div className='page-body'>
                <div className="col-lg-12">
                    <div className="body" id="profile-edit">
                        {/* {this.props.match.params.roleName} */}
                        {this.props.locale}
                        <div className="body-head d-flex align-items-center">
                            <p className="title">{this.props.match.params.roleName} rol</p>
                            <div className='search'>
                                <input className='search-input' type='text' placeholder='Ad və ya emailə görə axtar' />
                                <Icon path={mdiMagnify} size={.8} className='mdi' />
                            </div>
                            <div className='selecting-list' >
                                <div className='item active'>İstifadəçilər</div>
                                <div className='item'>İmtiyazlar</div>
                            </div>
                            <Button class='btn add-user' clicked={this.addUserClickHandler}>İmtiyaz əlavə et</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RoleInfo);