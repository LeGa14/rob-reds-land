import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
=======
import axios from 'axios'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
>>>>>>> imr-changes

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

import About from './components/ActivityPanel/About'
import LogIn from './components/ActivityPanel/LogIn'
import User from './components/ActivityPanel/User'
import SplashScreen from './components/ActivityPanel/SplashScreen'
import Game from './components/ActivityPanel/Game'

const ComponentMarker = styled.div`
.component {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ;
  margin: 1vw;
  border: 1px solid black;
  width: 98vw;
}
.component:hover {
  border: 3px solid red;
}
.App{
  width: 100vw;
  height: 100vh
}
.parentLevel {
  width: 98vw;
  margin: 1vw;
  color: navy;
}
.levelOne {
  width: 98vw;
  margin: 1vw;
}
.levelTwo {
  width: 96vw;
  margin: auto;
  color: blue;
  display: inline-grid;
}
.levelThree {
  width: 94vw;
  margin: 1vw;
  color: aqua;
}
.levelFour {
  width: 92vw;
  margin: 1vw;
  color: lime;
}
.levelFive {
  width: 90vw;
  margin: auto;
  color: teal;
}
`

class App extends Component {
  state = {
    users: [],
    characters: [],
    cards: [],

    loggedIn: false,
    currentUser: "",
    models: ['users', 'characters', 'cards'],
    app: {
      logo: "http://awesomexstitch.com/blog/wp-content/uploads/2016/01/borderlands-large.jpg",
      title: "Rob Red's Land"
    }
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data.users })
      console.log(this.state)
    })
  }

  loginHandle = () => {
    // let loggeInStatus = currentSession.loggedIn
    // console.log(!this.state.loggedIn)
    console.log(`You were logged ${!this.state.loggedIn ? 'OUT' : 'IN'} now.`)
    this.setState({loggedIn: !this.state.loggedIn})
    console.log(`Now, you're logged ${!this.state.loggedIn ? 'IN' : 'OUT'}.`)
  }

  render() {

    return (
      <Router>
        <ComponentMarker className="App">
<<<<<<< HEAD
          <NavigationBar />
          <ActivityPanel>
            <Switch>
              <Route exact path='/splash' render={SplashScreen} />
              <Route exact path='/about' render={About} />
              <Route exact path='/login' render={LogIn} />
              <Route exact path='/user' render={User} />
              <Route exact path='/game' render={Game} />
            </Switch>
          </ActivityPanel>
        </ComponentMarker>
=======
        <input 
        type="button" 
        value={this.state.loggedIn ? 'Log Out' : 'Log In'} 
        onClick={this.loginHandle.bind(this)}/>
          <NavigationBar 
          className="levelOne" 
          users={this.state.users}
          currentSession={this.state} />
          <ActivityPanel 
          className="levelOne" 
          users={this.state.users}
          currentSession={this.state} />
        </ComponentMarker>

>>>>>>> imr-changes
      </Router>
    );
  }
}

export default App;
