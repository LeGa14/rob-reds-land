import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

const ComponentMarker = styled.div`
.component {
  margin: 10px;
  border: 1px solid purple;
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
          <NavigationBar />
          <ActivityPanel />
        </ComponentMarker>

      </Router>
    );
  }
}

export default App;
