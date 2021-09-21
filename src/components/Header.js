import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <div className="header">
            <div className="navbar">
                <ul>
                    <li className={location.pathname === "/" && "active"}><Link to="/">Home</Link></li>
                    <li className={location.pathname === "/projects" && "active"}><Link to="/projects">Projects</Link></li>
                    <li className={location.pathname === "/blog" && "active"}><Link to="/blog">Blog</Link></li>
                    <li className={location.pathname === "/contact" && "active"}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;