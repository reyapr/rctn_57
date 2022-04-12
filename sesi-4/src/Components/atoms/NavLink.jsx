import React from 'react'

class NavLink extends React.Component {
    render() {
        return (
            <a 
                style={{
                    textDecoration: 'none',
                    color: this.props.color
                }} 
                href={this.props.href}
            >
                {this.props.text}
            </a>
        )
    }
}

export default NavLink