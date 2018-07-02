import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div className="component levelTwo">
                <img src={this.props.logo} />
                <h3>Hello from the NavBar's Header Component</h3>
            </div>
        )
    }
}

export default Header