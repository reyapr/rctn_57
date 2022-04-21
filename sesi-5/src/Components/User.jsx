import React from 'react'
import UserDetail from './UserDetail'

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'udin',
            age: 10,
            cars: ['bmw', 'toyota']
        }
    }
    
    getUserName = () => {
        return this.state.name + ' <== from method'
    }
    
    setUserName = () => {
        this.setState({
            name: 'bambang'
        })
    }
    
    addAgeOne = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    
    render() {
        return (
            <div>
                <UserDetail name={this.state.name} age={10}/>
                <button style={{ height: '50px', width: '110px'}} onClick={this.setUserName}>update username</button>
                {[<div>1</div>, <div>2</div>]}
                <button onClick={this.addAgeOne}>add age</button>
            </div>
        )
    }
}

export default User;