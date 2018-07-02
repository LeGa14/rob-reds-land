import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LoginStyle = styled.div`
form {
    display: flex;
    flex-direction: column;
}
.loginInput, .userAction {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
`

class LogIn extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = { ...this.state }
        newState[inputName] = userInput
        this.setState(newState)

    }

    handleSubmit = (event) => {
        event.preventDefault()
        (event.target.name === "username" ? console.log("GOOD") : console.log("BAD"))
}

    render() {
        return (
            <LoginStyle className="component levelTwo actComp">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="loginInput">

                        <p>Username: </p>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <p>Password: </p>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="userAction">

                        <button type="submit">Login</button>
                        <Link to="/signup"><button>SignUp</button></Link>
                    </div>
                </form>
            </LoginStyle>
        )
    }
}

export default LogIn