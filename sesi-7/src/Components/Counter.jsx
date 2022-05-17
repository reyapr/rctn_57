import React from 'react'
import axios from 'axios'
import './style.css'
import style from './test1.module.css'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count !== nextState.count) {
            return true
        } else {
            return false
        }
    }
    
    setNum = (num) => {
        this.setState({
            count: this.state.count + num
        })
    }
    
    render() {
        return (
            <div>
                <div className={style.text}>{this.state.count}</div>
                <div>
                    <button onClick={() => this.setNum(0)}>+</button>
                    <button onClick={() => this.setNum(-1)}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;