import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Tech-Posts</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default Header;
