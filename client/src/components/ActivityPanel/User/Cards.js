import React, { Component } from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
=======
import { Link } from 'react-router-dom'
>>>>>>> imr-changes

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
<<<<<<< HEAD
        return (
            <div className="component">
                <h4>Hello from the Cards Component</h4>
                <CardIndex className="cardContainer">
=======
        return(
            <div className="component levelFour">
                <h4>Hello from the Cards Component</h4>
                <Link to='/cards/new'><button>Add New Card</button></Link>
                <div>
>>>>>>> imr-changes
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