import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Outfit Analyzer</h1>
      <div>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;