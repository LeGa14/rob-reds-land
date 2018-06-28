import React, { Component } from 'react'

import Characters from './User/Characters'

class User extends Component {
    render() {
        return(
            <div>
                <h3>Hello from the User Component</h3>
                <Characters />
            </div>
        )
    }
}

export default User