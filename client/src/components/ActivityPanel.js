import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Splash from './ActivityPanel/Splash'
import About from './ActivityPanel/About'
import LogIn from './ActivityPanel/LogIn'
import SignUp from './ActivityPanel/SignUp'
import User from './ActivityPanel/User'
import Game from './ActivityPanel/Game'
import UserEntry from './ActivityPanel/UserEntry'

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
form {
    display: flex;
    flex-direction: column;
}
.loginInput, .userAction {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
input {
    height: 3vw;
}
.splashContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}
`

class ActivityPanel extends Component {
    state = {}

    render() {

        const SplashWrapper = (props) => (
            <Splash currentUser={this.props.currentSession.user} {...props} />
        )
        const SignUpWrapper = (props) => (
            <SignUp users={this.state.users} {...props} />
        )
        const LogInWrapper = (props) => (
            <LogIn users={this.state.users} {...props} />
        )
        const GameWrapper = (props) => (
            <Game users={this.state.users} {...props} />
        )
        const UserWrapper = (props) => (
            <User users={this.state.users} {...props} />
        )
        const usingUsers = ['LogIn', 'Game', 'Users']

        const Wrapper = (props) => (
            usingUsers.map((page, i) => {
                console.log(`Wrapping Page ${i}: ${page}`)
                eval(
                    '<{page} users={this.state.users} {...props} />'
                )
            })
        )

        return (
            <div>
                <SplashScreen className="component parentLevel">
                    <h2>Hello from the ActivityPanel Component</h2>
                    <div className="levelTwo">
                        <Route exact path='/' component={SplashWrapper} />
                        <Route exact path='/entry' component={UserEntry} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/login' component={LogInWrapper} />
                        <Route exact path='/signup' component={SignUpWrapper} />
                        <Route exact path='/game' component={GameWrapper} />
                        <Route path='/user' component={UserWrapper} />
                    </div>
                </SplashScreen>
            </div>
        )
    }
}

export default ActivityPanel