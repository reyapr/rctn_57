import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={this.props.image} className="card-img-top" alt={this.props.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Card