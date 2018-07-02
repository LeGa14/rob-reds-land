import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {
    state = {
        username: "",
        email: "",
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
        axios.post('/api/users', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <div className="component levelTwo">
                <h2>Sign up and Create an Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="loginInput">

                        <p>Email: </p>
                        <input
                            placeholder="Email"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
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
                            value={this.state.passowrd}
                            onChange={this.handleChange}
                        />
                        <p>Confirm Password: </p>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.pasword}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="userAction">

                        <button type="submit" to='/game'>SignUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;