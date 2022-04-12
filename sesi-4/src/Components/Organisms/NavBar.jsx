import React from 'react'
import NavLink from '../atoms/NavLink'
import SearchInput from '../molecules/SearchInput'

class NavBar extends React.Component {
    render() {
       return (
        <div style={{ marginTop:'10px', border: '1px solid' ,width: '100%', display:'flex', justifyContent: 'space-between'}}>
            <div style={{ flex: 3, display: 'flex', justifyContent: 'space-evenly'}}>
                <NavLink text='Home'/>
                <NavLink text='Profile'/>
                <NavLink text='User'/>
            </div>
            
            <div style={{ flex: '7', display: 'flex', justifyContent: 'flex-end'}}>
                <SearchInput/>
            </div>
        </div>
       )
    }
}

export default NavBar