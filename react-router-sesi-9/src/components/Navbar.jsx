import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    
    return (
        <nav>
            <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/user'>User</Link> | <Link to='/items'>Items</Link> | 
            {' '}{localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>}
        </nav>
    )
}