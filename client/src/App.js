import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

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
.actComp {

}
`

class App extends Component {
  state = {
    users: [],
    characters: [],
    cards: [],

    currentSession: {
      user: {username: ""},
      character: {}
    },
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

  render() {

    return (
      <Router>
        <ComponentMarker className="App">
          <NavigationBar clasName="levelOne" users={this.state.users} />
          <ActivityPanel clasName="levelOne" users={this.state.users} currentSession={this.state.currentSession} />
        </ComponentMarker>

      </Router>
    );
  }
}

export default App;
