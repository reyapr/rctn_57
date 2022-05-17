import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const urlFrom = location.state?.from?.pathname || '/'
    
    const handleLogin = () => {
        localStorage.setItem('token', 'filled')
        navigate(urlFrom, { replace: true })
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <p>Klik tombol login</p>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}