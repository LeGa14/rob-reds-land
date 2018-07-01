import React, { Component } from 'react'

import SingleCard from './SingleCard'

class Cards extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Cards Component</h4>
                <div>
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                </div>
            </div>
        )
    }
}

export default Cards