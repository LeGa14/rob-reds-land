import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserEntry extends Component {
    render() {
        return (
            <div className="component levelThree">
                <h3>Choose your Entry Method</h3>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        )
    }
}

export default UserEntry