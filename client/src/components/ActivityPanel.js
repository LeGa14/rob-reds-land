import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import SplashScreen from './ActivityPanel/SplashScreen'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'

class ActivityPanel extends Component {
    render() {
        return (
            <Router>
                <div className="component">
                    <h2>Hello from the ActivityPanel Component</h2>
                    <Switch>
                        <Route exact path='/splash' component={SplashScreen}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/login' component={LogIn}/>
                        <Route exact path='/user' component={User}/>
                        <Route exact path='/game' component={Game}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ActivityPanel