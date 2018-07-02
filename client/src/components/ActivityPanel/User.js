import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import Characters from './User/Characters'
import Cards from './User/Cards'
import UserInfo from './User/UserInfo'

const UserStyle = styled.div`
.levelFive {
    width: 88vw;

}
`

class User extends Component {
    render() {
        const childrenComponents = ['UserInfo', 'Cards', 'Characters']

        const routeMaker = ((str) => {
            const url = this.props.match.url
            console.log(url)
            childrenComponents.map((child) => {
                console.log(`User Component is parent to child: ${child}`)
                const childUrl = `${url}/${child}`
                console.log(`from user.js in components. The url is: ${childUrl}`)
                return (
                    ((str === "Link") ?
                        (
                            <Link to={childUrl} component={child}>{child}
                                <h4>The url is {url}</h4>
                            </Link>
                        ) :
                        ((str === "Route") ? (
                            <Route exact path={childUrl} component={child} />
                        ) : (<div className="nothing"></div>)
                        ))
                )
            })
        })
        return (
            <UserStyle className="component levelThree">
                <h3>Hello from the User Component</h3>
                <Link to='/user/userInfo'>Info</Link>
                <Link to='/user/characters'>Characters</Link>
                <Link to='/user/cards'>Cards</Link>
                <hr />
                <Route exact path='/user/userInfo' component={UserInfo} />
                <Route exact path='/user/characters' component={Characters} />
                <Route exact path='/user/cards' component={Cards} />
            </UserStyle>
        )
    }
}

export default User