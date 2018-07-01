import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './NavigationBar/Header'
import UserStatus from './NavigationBar/UserStatus'
import Links from './NavigationBar/Links'

const NavStructure = styled.div`
div.NavParts {
    display: flex;
    flex-directions: column;
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
.NavigationBar.component {
    width: 98vw;
    height: 28vh;
}
`

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar component parentLevel">
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