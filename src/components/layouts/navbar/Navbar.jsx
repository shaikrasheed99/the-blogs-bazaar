import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="hero">
                <h1>The Blogs Baazar</h1>
            </Link>
            <div className="links">
                <Link to="/" id="home">Home</Link>
                <Link to="/create" id="new-blog">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;