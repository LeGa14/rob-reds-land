import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkButton = styled.div`
button {
    width: 6vw;
    height: 5vh
    margin: auto;
    display: inline-grid;
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
                    <Link to="/"><button>START Screen</button></Link>
                    <Link to="/about"><button>About</button></Link>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/user"><button>User</button></Link>
                    <Link to="/game"><button>Game</button></Link>
                </div>
            </LinkButton>
        )
    }
}

export default Links