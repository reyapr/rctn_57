import React from 'react'
import Card from '../molecules/Card'

class ProductList extends React.Component {
    
    render() {
        
        
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', width: '80%' }}>
                    {
                        this.props.data.map(res => {
                            return (
                                <Card {...res}/>
                                // <Card alt=data.alt title=data.title/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductList