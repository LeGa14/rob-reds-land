import React, { Component } from 'react';
import Header from './Header'
import UserStatus from './UserStatus'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <h2>Hello from the NavigationBar Component</h2>
                <Header />
                <UserStatus />
            </div>
        );
    }
}

export default NavigationBar;