import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const NewChar = styled.div`
 form{
     width: 50vw;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin: auto;
 }
 button {
     margin: 1vw;
     color: aqua;
     background: red;
     border: 1px solid black;
 }
`

class NewCharacter extends Component {
    state = {
        user: {
            _id: "",
            characters: [],
            newCharacter: {
                class: "",

            }
        }
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
        axios.post('/api/users/:userId', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <div className="component levelFive">
                <h5> Hello New Character</h5>
                <NewChar className="loginInput">
                    <form onSubmit={this.handleSubmit}>
                        <p>Class: </p>
                        <select name="class"
                            value={this.state.class}
                            onChange={this.handleChange}>
                            <option value="Soldier" selected>Soldier</option>
                            <option value="Siren">Siren</option>
                            <option value="Assassin">Assassin</option>
                            <option value="Berserker">Berserker</option>
                        </select>
                        <p>Name: </p>
                        <input
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <p>Image: </p>
                        <input
                            placeholder="Image"
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                        <div className="userAction">

                            <button type="submit" to='/characters'>Create Character</button>
                        </div>
                    </form>
                </NewChar>
            </div>
        );
    }
}

export default NewCharacter