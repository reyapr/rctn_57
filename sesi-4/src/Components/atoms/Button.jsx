import React from 'react'

class Button extends React.Component {
    render() {
        const myStyles = {
            backgroundColor: this.props.bgColor,
            width: '60px',
            height: '30px',
            borderRadius: '10px',
            color: this.props.color
        }
        return (
            <button style={myStyles}>{this.props.text}</button>
        )
    }
}

export default Button