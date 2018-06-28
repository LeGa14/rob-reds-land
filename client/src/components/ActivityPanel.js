import React, { Component } from 'react'

import SplashScreen from './ActivityPanel/SplashScreen'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'

class ActivityPanel extends Component {
    render() {
        return (
            <div>
                <h2>Hello from the ActivityPanel Component</h2>
                <SplashScreen />
                <About />
                <LogIn />
            </div>
        )
    }
}

export default ActivityPanel