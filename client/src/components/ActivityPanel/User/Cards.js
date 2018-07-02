import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SingleCard from './SingleCard'
import NewCard from './NewCard'

class Cards extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Cards Component</h4>
                <Link to='/cards/new'><button>Add New Card</button></Link>
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