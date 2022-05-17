import { Link, Outlet } from "react-router-dom";

export default function Members() {
    return (
        <div>
            <h1>Members</h1>
            <p>Select a member to be shown</p>
            <Link to='Udin'>Udin</Link> {' '}
            <Link to='Bambang'>Bambang</Link>
            <Outlet/>
        </div>
    )
}