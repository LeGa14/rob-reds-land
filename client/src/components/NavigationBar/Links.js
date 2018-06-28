import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return(
            <div className="component">
                <h3>Hello from the NavBar's Links Component</h3>
                <Link to='/about'>About</Link> | 
                <Link to='/login'>Login</Link> | 
                <Link to='/user'>User Info</Link> | 
            </div>
        )
    }
}

export default Links