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
  border: 1px solid blue;
  width: 98vw;
}
.App{
  width: 100vw;
  height: 100vh
}
.parentLevel {
  width: 98vw;
  margin: 1vw;
  color: darkblue;
}
.levelOne {
  width: 98vw;
  margin: 1vw;
}
.levelTwo {
  width: 96vw;
  margin: 1vw;
  color: blue;
}
.levelThree {
  width: 94vw;
  margin: 1vw;
  color: lightblue;
}
.levelFour {
  width: 92vw;
  margin: 1vw;
  color: aqua;
}
.levelFive {
  width: 90vw;
  margin: 1vw;
  color: green;
}
`

class App extends Component {
  state = {
    users: [],
    characters: [],
    cards: [],

    currentUser: {},
    models: ['users', 'characters', 'cards']
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      console.log('your database looks like...')
      this.setState({ users: res.data.users })
      console.log(res.data.users.length)
      console.log(`the ${this.state.users.length}-user database is in the state.`)
      console.log('state: ', this.state)
      console.log(res.data)
    })
  }

  render() {
    return (
      <Router>
        <ComponentMarker className="App">
          <NavigationBar clasName="levelOne"/>
          <ActivityPanel clasName="levelOne" />
        </ComponentMarker>

      </Router>
    );
  }
}

export default App;
