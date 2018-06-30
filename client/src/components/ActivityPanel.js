import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Splash from './ActivityPanel/Splash'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'

class ActivityPanel extends Component {
    render() {
        return (
            <div className="component">
                <h2>Hello from the ActivityPanel Component</h2>
                <Route exact path='/splash' component={Splash} />
                <Route exact path='/about' component={About} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/game' component={Game} />
                <Route path='/user' component={User} />
            </div>
        )
    }
}

export default ActivityPanel