import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>about page</p>
            <Link to='company'>About Company</Link> | {" "}
            <Link to='me'>About Me</Link>
            <Outlet/>
        </div>
    )
}