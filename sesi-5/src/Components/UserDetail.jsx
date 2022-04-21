import React from 'react'
import PropTypes from 'prop-types'


class UserDetail extends React.Component {
    render() {
        let isInclude = this.props.age.includes('1')
        return (
            <div>
                <br />
                <div>name: {this.props.name}</div>
                <div>age: {this.props.age}</div>
                <br />
            </div>
        )
    }
}

UserDetail.propTypes = {
    age: PropTypes.string.isRequired
}

export default UserDetail
