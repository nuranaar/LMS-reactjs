import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ProfileDatasRead from '../../container/ProfileDatasRead/ProfileDatasRead';
import ProfileDataEdit from '../../container/ProfileDataEdit/ProfileDataEdit';

export default class ProfilePage extends Component {

    render() {
        return (
            <React.Fragment>
                <Route path='/profile/' exact render={() => <ProfileDatasRead />} />
                <Route path='/profile/edit' render={() => <ProfileDataEdit />} />
            </React.Fragment>
        )
    }
}
