import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Characters from './User/Characters'
import Cards from './User/Cards'
import UserInfo from './User/UserInfo'

class User extends Component {
    render() {
        return (
            <div className="component">
                <h3>Hello from the User Component</h3>
                <Route exact path='/user/userId' component={UserInfo} />
                <Route exact path='/user/characters' component={Characters} />
                <Route exact path='/user/cards' component={Cards} />
            </div>
        )
    }
}

export default User