import React from 'react'

const Button = (props) => {
    const myStyles = {
        backgroundColor: props.bgColor,
        width: '60px',
        height: '30px',
        borderRadius: '10px',
        color: props.color
    }
    return (
        <button style={myStyles}>{props.text}</button>
    )
}

export default Button