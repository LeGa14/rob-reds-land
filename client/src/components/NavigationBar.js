import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './NavigationBar/Header'
import UserStatus from './NavigationBar/UserStatus'
import Links from './NavigationBar/Links'

const NavStructure = styled.div`
.NavParts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    height: 28vh;
    width: 98vw;
    
}

.NavComponents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    margin: auto;
    width: 96vw;
}
.NavigationBar {
    width: 98vw;
    height: 28vh;
    color: yellow;
}
img {
    height: 5vh;
}
`

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar component parentLevel" >
                <NavStructure className="NavParts">
                    <h2>Welcome to the Borderlands</h2>
                    <h1> Are you ready to Rob Red's Land</h1>
                    <div className="NavComponents">
                        <Header appLogo={this.props.appLogo}/>
                        <Links />
                        <UserStatus />
                    </div>
                </NavStructure>
            </div>
        );
    }
}

export default NavigationBar;