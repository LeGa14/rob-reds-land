import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

import About from './components/ActivityPanel/About'
import LogIn from './components/ActivityPanel/LogIn'
import User from './components/ActivityPanel/User'
import Splash from './components/ActivityPanel/Splash'
import Game from './components/ActivityPanel/Game'

const ComponentMarker = styled.div`
.component {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url("https://cdn.shopify.com/s/files/1/0070/0943/5706/products/Tile-Grunge-Blue_1000x1000_6c165147-1751-4730-96b1-536c2e96b583_2000x.jpg?v=1527215600");
  width: ;
  margin: 1vw;
  border: 2px solid black;
  width: 98vw;
}
.component:hover {
  border: 3px solid yellow;
}
button {
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid black;
  color: white
}
button:hover {
  color: pink;
  border: 2px blue rgb(0, 0, 255);
  background-color: rgba(0, 0, 255, 0.6);
}
input:hover {
 border: 2px solid goldenrod;
}
.App{
  width: 100vw;
  height: 100vh
}
.parentLevel {
  background-image: url("https://newevolutiondesigns.com/images/freebies/grunge-wallpaper-1.jpg");
  width: 98vw;
  margin: 1vw;
  color: white;
}
.levelOne {
  width: 98vw;
  margin: 1vw;
}
.levelTwo {
  background-image: url("https://cdn.shopify.com/s/files/1/0070/0943/5706/products/Tile-Grunge-Blue_1000x1000_6c165147-1751-4730-96b1-536c2e96b583_2000x.jpg?v=1527215600");
  width: 96vw;
  margin: auto;
  color: white;
  display: inline-grid;
}
.levelThree {
  width: 94vw;
  margin: 1vw;
  color: white;
}
.levelFour {
  width: 92vw;
  margin: 1vw;
  color: white;
}
.levelFive {
  width: 90vw;
  margin: auto;
  color: white;
}
img {
  height: 100px;
  width: 100px;
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
      logo: "https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536",
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
    this.setState({ loggedIn: !this.state.loggedIn })
    console.log(`Now, you're logged ${!this.state.loggedIn ? 'IN' : 'OUT'}.`)
  }

  render() {

    return (
      <Router>
        <ComponentMarker className="App">
          <input
            type="button"
            value={this.state.loggedIn ? 'Log Out' : 'Log In'}
            onClick={this.loginHandle.bind(this)} />
          <NavigationBar
            className="levelOne"
            users={this.state.users}
            currentSession={this.state}
            appLogo={this.state.app.logo}
            appTitle={this.state.app.title} />
          <ActivityPanel
            className="levelOne"
            users={this.state.users}
            currentSession={this.state} />
        </ComponentMarker>

      </Router>
    );
  }
}

export default App;
