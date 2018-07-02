import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="component levelTwo">
                <h2>Sign up and Create a User</h2>
                <form>
                    <div className="loginInput">

                        <p>Email: </p>
                        <input
                            placeholder="Email"
                            type="text"
                            name="email"
                        />
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
                        <p>Confirm Password: </p>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="userAction">

                        <button>SignUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;