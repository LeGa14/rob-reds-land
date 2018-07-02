import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SingleCharacter from './SingleCharacter'
import NewCharacter from './NewCharacter'

class Characters extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Characters Component</h4>
                <Link to='/characters/new'><button>Create New Character</button></Link>
                <div>
                    <SingleCharacter />
                    <SingleCharacter />
                    <SingleCharacter />
                    <SingleCharacter />
                </div>
            </div>
        )
    }
}

export default Characters