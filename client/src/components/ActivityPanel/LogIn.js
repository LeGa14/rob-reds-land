import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    render() {
        return (
            <LoginStyle className="component levelTwo actComp">
                <h1>Login</h1>
                <form>
                    <div className="loginInput">

                        <p>Username: </p>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                        />
                        <p>Password: </p>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="userAction">

                        <button>Login</button>
                        <Link to="/signup"><button>SignUp</button></Link>
                    </div>
                </form>
            </LoginStyle>
        )
    }
}

export default LogIn