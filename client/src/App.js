import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

const ComponentMarker = styled.div`
.component {
  margin: 10px;
  border: 10px solid blue;
}
`

class App extends Component {
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
