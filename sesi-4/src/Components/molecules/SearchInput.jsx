import React from 'react'
import Input from '../atoms/Input.jsx'
import Button from '../atoms/Button.jsx'

class SearchInput extends React.Component {
    render() {
        return (
            <div>
                <Input/>
                <Button color='white' text='Search' bgColor='green' />
            </div>
        )
    }    
}

export default SearchInput