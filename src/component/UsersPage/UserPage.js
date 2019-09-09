import React from 'react'
import { Route } from 'react-router-dom'
import Users from '../../container/Users/Users';

export default function UserPage() {
    return (
        <React.Fragment>
            <Route path='/users/' exact render={() => <Users />} />
            {/* <Route path='/user/profile-edit' render={() => < />} /> */}
        </React.Fragment>
    )
}
