import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            isError: false
        }
    }
    
    componentDidCatch(error, info) {
        console.log(error, info, `<=================== log ==================`);
        
        this.setState({
            isError: true
        })
    }
    
    render() {
        if(this.state.isError) {
            return <h1>Something went wrong</h1>
        }
        
        return this.props.children
    }
}

export default ErrorBoundary