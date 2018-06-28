import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import ActivityPanel from './components/ActivityPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <ActivityPanel />
      </div>
    );
  }
}

export default App;
