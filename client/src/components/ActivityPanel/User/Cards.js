import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SingleCard from './SingleCard'
import NewCard from './NewCard'

const CardIndex = styled.div`
.cardContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 10vw;
}
`


class Cards extends Component {
    render() {
        return(
            <div className="component levelFour">
                <h4>Hello from the Cards Component</h4>
                <Link to='/cards/new'><button>Add New Card</button></Link>
                <CardIndex className="cardContainer">
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                </CardIndex>
            </div>
        )
    }
}

export default Cards