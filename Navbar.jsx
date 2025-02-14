import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Clothing Matcher</h1>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;