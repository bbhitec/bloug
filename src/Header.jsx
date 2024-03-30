import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Bloug<span className="header-dot">.</span></h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write</Link>
            </div>
        </nav>
    )
}

export default Header