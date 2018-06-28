import React, { Component } from 'react'
import styled from 'styled-components'

import SingleCard from './SingleCard'

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
        return (
            <div className="component">
                <h4>Hello from the Cards Component</h4>
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