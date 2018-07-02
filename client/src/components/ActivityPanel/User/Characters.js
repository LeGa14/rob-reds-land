import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import SingleCharacter from './SingleCharacter'
import NewCharacter from './NewCharacter'

class Characters extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Characters Component</h4>
                <Link to='/user/:userId/characters/new'><button>Create New Character</button></Link>
                <Route path="/user/:userId/characters/new" component={NewCharacter}/>
                <Route path="/user/:userId/characters/one" component={SingleCharacter}/>
                <Route path="/user/:userId/characters">
                    <SingleCharacter />
                    <SingleCharacter />
                    <SingleCharacter />
                    <SingleCharacter />
                </Route>
            </div>
        )
    }
}

export default Characters