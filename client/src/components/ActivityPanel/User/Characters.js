import React, { Component } from 'react'

import SingleCharacter from './SingleCharacter'

class Characters extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Characters Component</h4>
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