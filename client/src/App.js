import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

import About from './components/ActivityPanel/About'
import LogIn from './components/ActivityPanel/LogIn'
import User from './components/ActivityPanel/User'
import SplashScreen from './components/ActivityPanel/SplashScreen'
import Game from './components/ActivityPanel/Game'

const ComponentMarker = styled.div`
.component {
  margin: 10px;
  border: 10px solid blue;
}
`

class App extends Component {
  render() {
    return (
      <Router>
        <ComponentMarker className="App">
          <NavigationBar />
          <ActivityPanel>
            <Switch>
              <Route exact path='/splash' component={SplashScreen} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={LogIn} />
              <Route exact path='/user' component={User} />
              <Route exact path='/game' component={Game} />
            </Switch>
          </ActivityPanel>
        </ComponentMarker>
      </Router>
    );
  }
}

export default App;
