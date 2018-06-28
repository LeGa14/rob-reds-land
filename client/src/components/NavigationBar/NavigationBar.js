import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './Header'
import UserStatus from './UserStatus'
import Links from './Links'

const NavStructure = styled.div`
div.NavParts {
    display: flex;
    flex-directions: column;
    justify-content: space-between;
    max-width: 30vw;
}
    
div.NavComponents {
    display: flex;
    flex-direction: row;
    justify-content: space between;
    max-width:30vw;
}
`

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
            <NavStructure className="NavParts">
                <h2>Hello from the NavigationBar Component</h2>
                <div className="NavComponents">
                    <Header />
                    <Links />
                    <UserStatus />
                </div>
            </NavStructure>
            </div>
        );
    }
}

export default NavigationBar;