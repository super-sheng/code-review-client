import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Code Review Client</h1>
      <nav className="header-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
    </header>
  );
}

export default Header;