import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Splash extends Component {

    render() {
        // const currentUser = ""
        console.log("Your props are", this.props)
        const currentUser = this.props.currentUser.username
        const nextPage = currentUser ? "/game" : "/entry"

        return (
            <div className="component mainWindow">
                <h3>Hello from the Splash Screen</h3>
                <div className="splashContent">
                    <Link to={nextPage}><button>START</button></Link>
                    <p>(Press START)</p>
                </div>
            </div>
        )
    }
}

export default Splash