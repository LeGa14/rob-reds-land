import React, { Component } from 'react'

import Characters from './User/Characters'
import Cards from './User/Cards'

class User extends Component {
    render() {
        return(
            <div>
                <h3>Hello from the User Component</h3>
                <Characters />
                <Cards />
            </div>
        )
    }
}

export default User