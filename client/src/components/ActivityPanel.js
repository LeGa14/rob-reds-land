import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Splash from './ActivityPanel/Splash'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'

const SplashScreen = styled.div`
div.viewPanel{
    height: 68vh;
}
div.mainWindow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    margin: auto;
    width: 96vw;
    height: 66vh;
}
button {
    height: 5vh;
    width: 25vw;
    margin: auto
}
`

class ActivityPanel extends Component {
    render() {
        return (
            <div>
                <SplashScreen className="component parentLevel">
                    <h2>Hello from the ActivityPanel Component</h2>
                    <div className="levelTwo">
                        <Route exact path='/' component={Splash} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/login' component={LogIn} />
                        <Route exact path='/game' component={Game} />
                        <Route path='/user' component={User} />
                    </div>
                </SplashScreen>
            </div>
        )
    }
}

export default ActivityPanel