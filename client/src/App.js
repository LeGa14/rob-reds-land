import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'

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
    models: [ 'users', 'characters', 'cards']
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      this.setState({users: res.data.users})
      console.log(res.data)
    })
  }

  render() {
    return (
      <ComponentMarker className="App">
        <NavigationBar />
        <ActivityPanel />
      </ComponentMarker>
    );
  }
}

export default App;
