import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blogs Baazar</h1>
            <div className="links">
                <a href="/" id="home">Home</a>
                <a href="/create" id="new-blog">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;