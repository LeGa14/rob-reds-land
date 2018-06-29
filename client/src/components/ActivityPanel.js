import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import SplashScreen from './ActivityPanel/SplashScreen'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'

// class ActivityPanel extends Component {
//     render() {
//         return (
//             <Router>
//                 <div className="component">
//                     <h2>Hello from the ActivityPanel Component</h2>
//                 </div>
//             </Router>
//         )
//     }
// }
class ActivityPanel extends Component {
    render() {
        return (
            <Router>
                <div className="component">
                    <h2>Hello from the ActivityPanel Component</h2>
                </div>
                <Switch>
                    <Route exact path='/splash' render={SplashScreen} />
                    <Route exact path='/about' render={About} />
                    <Route exact path='/login' render={LogIn} />
                    <Route exact path='/user' render={User} />
                    <Route exact path='/game' render={Game} />
                </Switch>
            </Router>
        )
    }
}

export default ActivityPanel