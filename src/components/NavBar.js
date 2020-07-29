import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-links">
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/studentoverview">
          <li>Student Overview</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
