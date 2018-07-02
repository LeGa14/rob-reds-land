import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div className="component levelTwo">
                <img src={this.props.appLogo} alt={this.props.appTitle}/>
            </div>
        )
    }
}

export default Header