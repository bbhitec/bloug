import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar">
            <h1>Bloug</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write</Link>
            </div>
        </nav>
    )
}

export default Header