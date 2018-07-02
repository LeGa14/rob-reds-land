import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkButton = styled.div`
button {
    width: 4vw;
    margin: 1vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    // flex-wrap: wrap;
}
.NavLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

}
`

class Links extends Component {
    render() {
        return (
            <LinkButton className="component levelTwo">
                <h3>Hello from the NavBar's Links Component</h3>
                <div className="NavLinks">
                    <button><Link to="/">START Screen</Link></button>
                    <button><Link to="/about">About</Link></button>
                    <button><Link to="/login">Login</Link></button>
                    <button><Link to="/user">User</Link></button>
                    <button><Link to="/game">Game</Link></button>
                </div>
            </LinkButton>
        )
    }
}

export default Links