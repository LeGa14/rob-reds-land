import React, { Component } from 'react';
import Header from './Header'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <h2>Hello from the NavigationBar Component</h2>
                <Header />
            </div>
        );
    }
}

export default NavigationBar;