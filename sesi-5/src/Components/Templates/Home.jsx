import React from 'react'
import NavBar from '../Organisms/NavBar'
import ProductList from '../Organisms/ProductList'

class HomeTemplate extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <ProductList data={this.props.data}/>
                </div>
            </div>
        )
    }
}

export default HomeTemplate