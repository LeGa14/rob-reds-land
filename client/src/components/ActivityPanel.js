import React, { Component } from 'react'

import SplashScreen from './ActivityPanel/SplashScreen'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'

class ActivityPanel extends Component {
    render() {
        return (
            <div className="component">
                <h2>Hello from the ActivityPanel Component</h2>
                <SplashScreen />
                <About />
                <LogIn />
                <User />
                <Game />
            </div>
        )
    }
}

export default ActivityPanel